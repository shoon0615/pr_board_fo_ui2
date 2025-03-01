# SpringBoot-SideProject-CRUD_FrontOffice_UI_Basic
React 기반의 프론트엔드 UI 제공 프로젝트(기본)

## 설명
기본 React 구조에 충실한 함수형 컴포넌트 형식으로 구성되었습니다.
- Model : `None`
- View : React
- Controller : `None`

---

### ⚙️ 개발 환경
- **IDE** : Visual Studio Code(1.97.2)
- **Node.js** : 20.18.1
- **Framework** : CRA(create-react-app)
- **Language** : TypeScript
- **CSS** : MUI(Material UI)
- **Component** : MUI(Material UI)

### 🖥️ Tip
- **Docker** : <a href="https://github.com/shoon0615/pr_board_ui">상세보기</a>

<!-- 
- **Docker** : <a href="https://github.com/shoon0615/pr_board_fo_ui_basic/blob/master/.devcontainer/README.md">상세보기</a>
 -->

### 🧷 Hook
- **Router** : react-router-dom(createBrowserRouter)
- **Data** : axios, @tanstack/react-query 
- **Form** : react-hook-form
- **Valid** : Zod(@hookform - zodResolver)
- **Auth(인증 & 인가)** : @reduxjs/toolkit
- **Component** : @mui/material
- **Grid** : @mui/x-data-grid
- **TDD** : @testing-library/react

### 🧷 Hook(확인 중)
- **Framework** : Vite
- **TDD** : vitest
- **Data** : @reduxjs/toolkit/query/react
- **Form** : react-select, react-modal-hook, react-datepicker
- **Auth(인증 & 인가)** : Zustand
- **CSS** : styled-components, Tailwind CSS
- **Custom** : useBlock, useSelector, useDispatch
- **최적화** : useMemo, useCallback
- **Etc..** : useInView(observer), useSWR(SWR), 페이징, debounce, throttle, useDispatch

### 📂 디렉토리 구조(기본 - MUI 미포함)
```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📂custom
 ┃ ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardDataBody.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardDataHeader.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜BoardDataGrid.tsx
 ┃ ┃ ┃ ┗ 📜MainGrid.tsx
 ┣ 📂contexts
 ┃ ┣ 📂router
 ┃ ┃ ┣ 📜configRouter.tsx
 ┃ ┗ 📂store
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜configStore.ts
 ┣ 📂layout
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Header
 ┃ ┗ 📂SideMenu
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ```

### 📂 디렉토리 구조(상세 - MUI 포함)
```bash

```

### 📂 디렉토리 구조(폴더)
```bash

```

### 📂 디렉토리 구조(파일)
```bash

```