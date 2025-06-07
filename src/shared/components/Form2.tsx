// import * as React from 'react';
import React, { ReactNode, useEffect } from 'react';
import {
    Box, FormControl, FormLabel, TextField, OutlinedInput, TextFieldProps, FormHelperText, 
    Autocomplete, Chip, 
} from '@mui/material';
import { Tag, Clear, } from '@mui/icons-material';
import { 
    FieldValues, FormProvider, SubmitHandler, SubmitErrorHandler, UseFormProps, UseFormReturn, FieldPath,
    useForm, Controller, useFormContext, ControllerProps, UseControllerProps, useController, UseFormReset,
} from 'react-hook-form';
import { ZodType, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from "@hookform/error-message";
import { DevTool } from '@hookform/devtools';
import { BaseType } from '@/shared/types';

// UseFormReturn 사용 시, children 에서 method 사용 가능(useForm 자체를 전달하여 FormProvider 처럼 useForm 사용)
// UseFormReturn 미사용 시, FormProvider 로만 호출 가능
// FormProvider 도 적용했기에 <Form> 에 속하지 않아도 useFormContext 를 통해 Form 의 useForm 호출 가능
type FormProps<TFormValues extends FieldValues, Schema> = {
    id?: string;
    options?: UseFormProps<TFormValues>;
    schema: Schema;
    form: UseFormReturn<TFormValues>
    // children: (methods: UseFormReturn<TFormValues>) => ReactNode;
    children: ReactNode;
    onSubmit: SubmitHandler<TFormValues>;
};

// export const Form = ({ children }: { children: React.ReactNode }) => {
const Form = <
    Schema extends ZodType<any, any, any>,
    TFormValues extends FieldValues = z.infer<Schema>,
>({
    id,
    options,
    schema,
    form,
    children,
    onSubmit,
}: FormProps<TFormValues, Schema>) => {
    return (
        <FormProvider {...form}>
            <Box
                component='form'
                onSubmit={form.handleSubmit(onSubmit)}
                // noValidate
                // autoComplete='off'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 3,
                }}
            >
                {children}
            </Box>
            <DevTool control={form.control}  />
        </FormProvider>
    );
};

/* type FormFieldName<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
}; */

type FormFieldName = {
    defaultName: string;
};

// <Controller /> 방식(render)
// const FormField = <
const FormInputController = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    ...props
// }: ControllerProps<TFieldValues, TName>) => {
}: UseControllerProps<TFieldValues, TName> & FormFieldName) => {
    return (
        <FormControl>
            <FormLabel htmlFor={props.name}>{props.defaultName}</FormLabel>
            <Controller
                {...props}
                render={({ 
                    field,
                    fieldState: { error },
                }) => (
                    <TextField
                        {...field}
                        error={error ? true : false}
                        helperText={error?.message}
                        placeholder={`${props.defaultName}을 입력해주세요.`}
                        // autoComplete={field.name}
                        required
                        fullWidth
                        variant='outlined'
                        // color={error ? 'error' : 'primary'}
                    />
                )}
            />
        </FormControl>
    );
};

// useController 방식
const FormInput = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    ...props
}: UseControllerProps<TFieldValues, TName> & FormFieldName) => {
    const { field, fieldState: { error } } = useController(props);

    return (
        <FormControl>
            <FormLabel htmlFor={props.name}>{props.defaultName}</FormLabel>
            <TextField 
                {...field} 
                // error={!!error}
                error
                helperText={error?.message}
                placeholder={`${props.defaultName}을 입력해주세요.`}
                required
                fullWidth
                variant='outlined'
            />
        </FormControl>
    );
};

// 컴포넌트에서 추가 options 적용
const FormInputCustom = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    textFieldProps,
    ...props
}: {textFieldProps?: TextFieldProps} & UseControllerProps<TFieldValues, TName> & FormFieldName) => {
    const { field, fieldState: { error } } = useController(props);
    return (
        <FormControl>
            <FormLabel htmlFor={props.name}>{props.defaultName}</FormLabel>
            <TextField
                {...textFieldProps}
                {...field}
                error
                helperText={error?.message}
            />
        </FormControl>
    );
};

const FormTextArea = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    ...props
}: UseControllerProps<TFieldValues, TName> & FormFieldName) => {
    const { field, fieldState: { error } } = useController(props);  // formState: Form<Input> 의 state
    // const { register, control, handleSubmit, } = useFormContext();
    // const { formState: { errors } } = useFormContext();             // formState: <Form /> 의 state
    return (
        // <FormControl error={!!error}>
        <FormControl>
            <FormLabel htmlFor={props.name}>{props.defaultName}</FormLabel>
            <OutlinedInput
                {...field}
                // error={!!error}
                error
                placeholder={`${props.defaultName}을 입력해주세요.`}
                // autoComplete='current-contents'
                autoFocus
                required
                fullWidth
                // color={error ? 'error' : 'primary'}
                multiline
                rows={12}
                sx={{ height: 'auto' }}
            />
            <ErrorMessage
                // errors={errors}  // <FormProvider /> 사용 시, 생략 가능
                name={field.name}
                render={({ message }) => <FormHelperText error>{message}</FormHelperText>}
            />
        </FormControl>
    );
};

type AutocompleteOption = {
    test: string;
    // id?: number;
    id: number;
};

const FormComboBox = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    options,
    ...props
// }: {options: AutocompleteOption[]} & UseControllerProps<TFieldValues, TName> & FormFieldName) => {
}: {options: string[]} & UseControllerProps<TFieldValues, TName> & FormFieldName) => {
    const { field, fieldState: { error } } = useController(props);  // formState: Form<Input> 의 state
    return (
        <FormControl>
            <FormLabel htmlFor={props.name}>{props.defaultName}</FormLabel>
            <Autocomplete
                {...field}
                multiple
                // options={options.map(e => ({ ...e, label: e.test }))}
                options={options}
                // getOptionLabel={(option) => typeof option !== 'string' ? option.test : option}     // 화면에 보여줄 객체(미사용 시 [object Object] 로 출력됨) -> default: option.label
                // filterOptions={(option) => option.test === ''}
                filterSelectedOptions   // 이미 선택된 옵션 필터링
                freeSolo                // 임의의 값 입력 가능(=옵션에 없는 값)
                autoHighlight
                onChange={(_, newValue) => field.onChange(newValue)}
                // renderTags={(value: readonly AutocompleteOption[], getTagProps) => 
                    // value.map((option: AutocompleteOption, index: number) => {
                renderTags={(value: readonly string[], getTagProps) => 
                    value.map((option: string, index: number) => {
                        const { key, ...tagProps } = getTagProps({ index });
                        return (
                            <Chip variant="outlined" icon={<Tag />} label={option} key={key} {...tagProps} />
                        );
                    })
                }
                renderInput={(params) => (
                    // HashTag..
                    <TextField {...params} placeholder={`${props.name}..`} sx={{ '& .MuiInputBase-root': { alignContent: 'center', height: 'auto', } }} />
                )}
                clearIcon={<Clear fontSize="small" />}
                slotProps={{
                    clearIndicator: {   // button 스타일 적용
                        sx: { 
                            // border: 'none',
                            width: '2rem',
                            height: '2rem',
                            borderRadius: 20,
                            backgroundColor: 'transparent',
                            '&:hover': { backgroundColor: 'gray[500]' },
                        }
                    },
                }}
            />
            <ErrorMessage
                name={field.name}
                render={({ message }) => <FormHelperText error>{message}</FormHelperText>}
            />
        </FormControl>
    );
};

export {
    Form, FormInput, FormTextArea, FormComboBox, 
};