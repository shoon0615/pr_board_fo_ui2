## 참조
https://joong-sunny.github.io/react/react7/

## 폴더 구조(요약)
```bash
📦src
 ┣ 📂__tests__  👓 TDD
 ┣ 📂assets     🕶 모든 image, font 등의 CDN 서버
 ┣ 📂common     🦺 공통
 ┃ ┗ 📂components   🦺 <Button /> 등의 공통 컴포넌트
 ┣ 📂contexts   🥽 설정
 ┃ ┣ 📂router       🥽 router
 ┃ ┗ 📂store        🥽 redux
 ┣ 📂features   🥼 상세 구조
 ┃ ┣ 📂board
 ┃ ┃ ┣ 📂app
 ┃ ┃ ┃ ┣ 📂create
 ┃ ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂list
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂create
 ┃ ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Review.tsx
 ┃ ┃ ┃ ┣ 📂list
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┣ 📂types
 ┣ 📂hooks      🧥 커스텀훅
 ┣ 📂layout     👔 전체 구조
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Header
 ┃ ┗ 📂SideMenu
 ┣ 📂pages      👕 상세 구조
 ┃ ┣ 📂board
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂dashboard
 ┃ ┗ 📂shared-theme
 ┣ 📂services   👗 api 관련 설정 && 공통 함수
 ┣ 📂styles     👖 공통 스타일(css)
 ┣ 📂utils      🧣 단순 유틸 함수
 ┣ 📜App.tsx    🧤 상단 컴포넌트 -> 레이아웃 구조 설정(컴포넌트 위주)
 ┣ 📜index.tsx  🧦 최상단 컴포넌트 -> Provider 설정(options 위주)
 ```

## 폴더 구조
```bash
📦src
 ┣ 📂common
 ┣ 📂contexts
 ┃ ┣ 📂router
 ┃ ┗ 📂store
 ┣ 📂layout
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Header
 ┃ ┗ 📂SideMenu
 ┣ 📂pages
 ┃ ┣ 📂board
 ┃ ┃ ┣ 📂create
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂sign-in
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂dashboard
 ┃ ┗ 📂shared-theme
 ┣ 📂styles
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ```

## 파일 구조
```bash
📦src
 ┣ 📂common
 ┃ ┗ 📂components
 ┣ 📂contexts
 ┃ ┣ 📂router
 ┃ ┃ ┗ 📜configRouter.tsx
 ┃ ┗ 📂store
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜configStore.ts
 ┣ 📂layout
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜Copyright.tsx
 ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜MenuButton.tsx
 ┃ ┃ ┃ ┣ 📜NavbarBreadcrumbs.tsx
 ┃ ┃ ┃ ┣ 📜ScrollTop.tsx
 ┃ ┃ ┃ ┗ 📜Search.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┗ 📂SideMenu
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜MenuContent.tsx
 ┃ ┃ ┃ ┣ 📜OptionsMenu.tsx
 ┃ ┃ ┃ ┗ 📜SelectContent.tsx
 ┃ ┃ ┣ 📜SideMenu.tsx
 ┃ ┃ ┗ 📜SideMenuMobile.tsx
 ┣ 📂pages
 ┃ ┣ 📂board
 ┃ ┃ ┣ 📂create
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜AddressForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PaymentForm.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Review.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┃ ┃ ┣ 📜DataContent.tsx
 ┃ ┃ ┃ ┃ ┣ 📜HeaderContent.tsx
 ┃ ┃ ┃ ┃ ┗ 📜MainContent.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂sign-in
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜AppNavbar.tsx
 ┃ ┃ ┃ ┣ 📜CustomizedDataGrid.tsx
 ┃ ┃ ┃ ┗ 📜MainGrid.tsx
 ┃ ┃ ┣ 📂internals
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜Copyright.tsx
 ┃ ┃ ┃ ┗ 📂data
 ┃ ┃ ┃ ┃ ┗ 📜gridData.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂shared-theme
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ```