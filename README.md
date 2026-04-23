# Nuxt Client Template
 ## Clone template
```bash
git clone https://github.com/Jye-a-dev/template_nuxt_client
```

Template khởi tạo cho Nuxt client app theo hướng dễ mở rộng, dùng:

- Nuxt 4
- Vue 3
- TypeScript
- Nuxt file-based routing
- Nitro server runtime
- Global CSS

Template này phù hợp khi bạn muốn bắt đầu nhanh với Nuxt, nhưng vẫn giữ cấu trúc thư mục rõ ràng để scale tiếp theo hướng public page, auth flow, dashboard, service layer và middleware.

## 1. Project này đang setup theo kiểu nào?

Repo hiện tại là kiểu:

`Nuxt 4 + Vue 3 + TypeScript + file-based routing + layout separation`

Đây là setup phù hợp cho:

- Landing page
- Dashboard
- Admin panel
- Client app gọi API backend riêng
- Nuxt app cần chia layout rõ từ sớm
- Dự án muốn sẵn public layout, auth page, dashboard page và API/service layer

Nếu bạn chỉ cần một Vue app cực nhỏ, có thể setup này hơi nhiều folder hơn mức cần thiết.

## 2. Khi nào nên dùng từng kiểu setup?

### Vue + Vite + JavaScript

Dùng khi:

- muốn làm rất nhanh
- app nhỏ
- chưa cần TypeScript
- chưa cần Nuxt

Phù hợp cho UI nhỏ, demo nhanh hoặc project ngắn hạn.

### Vue + Vite + TypeScript

Dùng khi:

- muốn type an toàn hơn
- component và props bắt đầu nhiều lên
- cần maintain lâu dài
- chưa cần SSR hoặc file-based routing

Phù hợp cho SPA thuần Vue nhưng vẫn muốn cấu trúc chặt chẽ hơn.

### Nuxt 4 + Vue 3 + TypeScript

Dùng khi:

- muốn file-based routing
- muốn layout tách rõ theo khu vực như `public`, `dashboard`
- cần middleware theo route
- muốn có sẵn server API qua Nitro
- muốn scale từ client app sang hybrid app dễ hơn về sau

Đây chính là kiểu setup của repo này.

### Khi nào nên dùng Nuxt thay vì Vue + Vite?

Nên dùng Nuxt khi bạn cần:

- routing theo file
- layout theo file
- middleware theo route
- khả năng mở rộng sang SSR hoặc SSG
- server API cùng repo
- chuẩn tổ chức app rõ ràng ngay từ đầu

Nếu chỉ cần SPA rất đơn giản, Vue + Vite có thể nhẹ hơn.

## 3. Cài và chạy project

### Yêu cầu

- Node.js bản LTS tương thích với Nuxt 4, nên dùng Node.js 20+
- npm tương ứng với bản Node đang dùng

### Cài dependency

```bash
npm install
```

### Chạy môi trường dev

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Generate static site

```bash
npm run generate
```

### Preview build

```bash
npm run preview
```

## 4. Cấu trúc thư mục hiện tại

```text
app/
├─ assets/
│  ├─ css/
│  └─ img/
├─ components/
│  ├─ layouts/
│  │  ├─ @base/
│  │  └─ (public)/
│  ├─ pages/
│  │  └─ MainPage/
│  └─ ui/
├─ composables/
├─ layouts/
├─ middleware/
├─ pages/
│  ├─ auth/
│  └─ dashboard/
├─ plugins/
├─ services/
│  └─ api/
├─ types/
├─ utils/
├─ app.vue
└─ error.vue
public/
└─ img/
server/
├─ api/
└─ utils/
```

Ý nghĩa chính:

- `app/assets/`: CSS toàn cục và asset import từ source
- `app/components/`: Vue component tái sử dụng
- `app/components/layouts/`: layout part như navbar, footer, public shell
- `app/components/pages/`: UI tách riêng cho từng page để page file gọn hơn
- `app/components/ui/`: UI component dùng chung
- `app/composables/`: logic dùng lại với state/computed theo kiểu Vue composable
- `app/layouts/`: Nuxt layout file như `default`, `public`, `dashboard`
- `app/middleware/`: route middleware như auth guard
- `app/pages/`: Nuxt pages theo file-based routing
- `app/plugins/`: Nuxt plugin inject client hoặc cấu hình runtime
- `app/services/`: API call, auth service, request wrapper
- `app/types/`: TypeScript type/interface dùng chung
- `app/utils/`: helper function thuần logic
- `public/`: file tĩnh phục vụ trực tiếp
- `server/api/`: endpoint backend cùng repo qua Nitro
- `server/utils/`: helper chỉ dùng phía server

## 5. Luồng chạy hiện tại của app

Luồng cơ bản phía client:

1. Nuxt bootstrap app từ `app/app.vue`
2. `NuxtLayout` chọn layout phù hợp theo `definePageMeta`
3. `NuxtPage` render page tương ứng trong `app/pages`
4. Page gọi các component UI trong `app/components`
5. Middleware chặn route nếu cần
6. Plugin và composable cấp logic dùng chung cho toàn app

Tóm tắt:

```text
Nuxt runtime
-> app/app.vue
-> layout
-> page
-> components
```

Luồng phía server nếu có API:

```text
Request
-> server/api/*
-> server/utils/*
-> response
```

## 6. Cách setup một app Nuxt mới theo style của repo này

### Bước 1: tạo project Nuxt

```bash
npx nuxi@latest init my-app
cd my-app
npm install
```

### Bước 2: tạo app shell rõ ràng

Nên có:

- `app/app.vue`
- `app/layouts/default.vue`
- `app/layouts/public.vue`
- `app/layouts/dashboard.vue`

Ý tưởng là page chỉ chọn layout, còn phần shell nằm trong component/layout riêng.

### Bước 3: tách layout part

Nên tách ít nhất:

- `@base`: layout part gốc, có thể dùng lại
- `(public)`: layout cho route public
- dashboard layout riêng nếu app có khu vực sau đăng nhập

Ví dụ:

- `BaseNavbar.vue`
- `BaseFooter.vue`
- `PublicNavbar.vue`
- `PublicFooter.vue`
- `PublicSetup.vue`

### Bước 4: chia page và component

Nên theo quy tắc:

- route page nằm ở `app/pages`
- UI phức tạp tách sang `app/components/pages`
- component dùng chung nằm ở `app/components/ui`
- logic gọi API nằm ở `app/services`
- logic trạng thái dùng lại nằm ở `app/composables`
- helper thuần logic nằm ở `app/utils`

### Bước 5: thêm middleware và service layer sớm

Ngay cả khi app còn nhỏ, nên chuẩn bị sẵn:

- `app/middleware/auth.ts`
- `app/services/api/client.ts`
- `app/services/auth.service.ts`
- `app/types/index.ts`

Lý do là các phần này gần như chắc chắn sẽ xuất hiện khi app bắt đầu gọi API thật.

### Bước 6: chuẩn bị server folder nếu muốn đi xa hơn

Nếu muốn cùng repo xử lý API hoặc mock endpoint, có thể thêm:

- `server/api`
- `server/utils`

Cách này giúp app scale lên full-stack Nuxt dễ hơn mà không phải đổi framework.

## 7. Naming convention đề xuất

### File component

Dùng PascalCase:

- `BaseNavbar.vue`
- `BaseFooter.vue`
- `PublicNavbar.vue`
- `PublicFooter.vue`
- `PublicSetup.vue`
- `Index.vue`

### File helper, service, composable

Dùng tên phản ánh đúng trách nhiệm:

- `useAuth.ts`
- `auth.service.ts`
- `client.ts`
- `helpers.ts`

### Folder

Giữ tên theo domain hoặc vai trò:

- `components`
- `services`
- `middleware`
- `layouts`
- `MainPage`

## 8. Cách scale project khi app lớn hơn

Khi app tăng độ phức tạp, có thể mở rộng thêm:

- `features/`
- `store/`
- `constants/`
- `schemas/`
- `lib/`
- `validators/`

Ví dụ:

```text
app/
├─ features/
│  ├─ auth/
│  ├─ dashboard/
│  └─ profile/
├─ components/
├─ composables/
├─ services/
├─ store/
├─ types/
└─ utils/
```

Nếu team đi theo feature-based architecture, có thể gom:

- component
- composable
- service
- type
- validation

vào cùng một feature.

## 9. Khi nào nên tách theo feature?

Nên tách theo feature khi:

- app có nhiều module nghiệp vụ
- mỗi module có page, component, composable, API và type riêng
- team có nhiều người cùng làm
- cần giảm phụ thuộc chéo giữa các domain

Ví dụ:

```text
app/features/auth/
app/features/dashboard/
app/features/orders/
app/features/profile/
```

Không cần tách quá sớm nếu project vẫn nhỏ.

## 10. CSS trong repo này

Repo hiện đang dùng global CSS qua:

- `app/assets/css/main.css`
- cấu hình `css: ['~/assets/css/main.css']` trong `nuxt.config.ts`

Điểm chính:

- chưa dùng Tailwind
- style hiện tại đơn giản, dễ đọc và dễ sửa nhanh
- phù hợp cho template base trước khi gắn design system thật

Khi UI lớn dần, nên chuẩn hóa thêm:

- token màu
- token spacing
- reusable utility class
- component variant
- pattern responsive thống nhất

## 11. Routing trong repo này

Repo đang dùng routing theo file của Nuxt thay vì tự khai báo router tree thủ công như React Router.

Cách này phù hợp khi:

- muốn route map rõ ngay từ folder
- muốn layout gắn trực tiếp với page qua `definePageMeta`
- muốn middleware theo route
- muốn scale nested route dễ hơn

Ví dụ hiện tại:

- `app/pages/index.vue` -> `/`
- `app/pages/auth/index.vue` -> `/auth`
- `app/pages/dashboard/index.vue` -> `/dashboard`

## 12. Quy tắc tổ chức code nên giữ

- Page là nơi ghép màn hình, không nên nhồi quá nhiều UI nhỏ
- Component dùng chung không nên phụ thuộc chặt vào route cụ thể
- Service không nên render UI
- Composable không nên chứa template hoặc JSX
- Utils nên là pure function càng nhiều càng tốt
- Layout chỉ nên lo page shell và route structure
- Middleware chỉ nên xử lý điều hướng và rule truy cập

## 13. Checklist khi tạo project Nuxt mới

- xác định có cần Nuxt thật hay chỉ cần Vue + Vite
- quyết định sớm cách chia layout
- tách `app`, `layouts`, `pages`, `components`, `services`, `composables`
- tạo middleware nếu có route bảo vệ
- có sẵn runtime config cho API base
- tách page UI khỏi route file nếu màn hình bắt đầu lớn
- thống nhất naming convention từ đầu
- tránh over-engineer khi project còn nhỏ

## 14. Gợi ý hướng phát triển tiếp cho template này

Nếu muốn biến template này thành base mạnh hơn, có thể thêm:

- fetch wrapper chuẩn hơn
- env config rõ hơn theo môi trường
- auth flow hoàn chỉnh
- protected dashboard area
- toast system
- loading state pattern
- error boundary pattern
- form library
- validation schema
- state management nếu app lớn dần
- design token hoặc UI kit dùng chung

## 15. Tóm tắt

Nếu bạn muốn một setup Nuxt cân bằng giữa:

- dễ bắt đầu
- dễ đọc
- dễ scale
- không nhồi quá nhiều abstraction ngay từ đầu

thì `Nuxt 4 + Vue 3 + TypeScript + layout separation + service layer` là lựa chọn thực dụng.

Template này đang đi theo hướng đó:

- app shell rõ
- layout rõ
- page rõ
- middleware rõ
- service rõ
- folder rõ
- dễ nâng cấp tiếp
