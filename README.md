# 北市牛肉麵排行榜

一個基於 React + TypeScript 開發的台北市牛肉麵店家排行榜網站，提供店家評分、評論數排序和區域篩選功能。

## ✨ 功能特色

### 🏆 排行榜功能

- **主要排序**：根據評論數或評分進行排序
- **次要排序**：評分相同時，自動根據評論數進行次要排序
- **區域篩選**：支援台北市各行政區篩選
- **動態顯示**：全部區域顯示前 60 筆，特定區域顯示前 5 筆

### 🗺️ 地圖整合

- **Google Maps 整合**：點擊 View 按鈕直接開啟店家在 Google Maps 的位置
- **精確定位**：使用店家名稱和座標進行精確搜尋
- **新分頁開啟**：不影響當前瀏覽體驗

## 🛠️ 技術架構

### 前端技術

- **React 18** - 現代化 React 框架
- **TypeScript** - 型別安全的 JavaScript
- **Vite** - 快速的建構工具
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Shadcn/ui** - 高品質的 Tailwind CSS 元件庫

### 狀態管理

- **React Query (TanStack Query)** - 狀態管理

### 開發工具

- **ESLint** - 程式碼品質檢查
- **Prettier** - 程式碼格式化
- **pnpm** - 快速的套件管理器

## 專案結構

```
src/
├── components/
│   ├── atoms/               # 原子元件
│   │   ├── rank-badge/      # 排名徽章
│   │   ├── rating-display/  # 評分顯示
│   │   └── review-count-display/  # 評論數顯示
│   ├── molecules/           # 分子元件
│   │   ├── declaration-section/ # 聲明區塊
│   │   ├── sort-button/     # 排序按鈕
│   │   └── shop-card/       # 店家卡片
│   ├── organisms/           # 有機體元件
│   │   ├── sort-controls/   # 排序控制
│   │   ├── district-selector/  # 區域選擇器
│   │   ├── shop-list/       # 店家列表
│   │   ├── loading-skeleton/  # 載入骨架屏
│   │   ├── header/          # 頁面標題
│   │   └── footer/          # 頁面底部
│   └── ui/                  # UI 基礎元件
├── hooks/                   # 自定義 Hooks
├── providers/               # 應用程式 Providers
├── services/                # API 服務
├── types/                   # TypeScript 型別定義
├── utils/                   # 工具函數
└── App.tsx                  # 主應用程式
```

## 📊 資料來源

### 資料架構

由於本專案採用 SPA（單頁應用程式）架構，為避免 Google Maps API 流量超限，資料處理採用分離式架構：

- **資料處理專案**：[json-gather](https://github.com/garylin0969/json-gather)
  - 負責呼叫 Google Maps Places API (New)
  - 將資料處理成靜態 JSON 檔案
  - 部署到 GitHub Pages 提供資料服務

- **前端專案**：本專案 (taipei-beef-noodles-rank)
  - 透過 GitHub Pages 連結取得資料
  - 資料來源：https://garylin0969.github.io/json-gather/data/taipei-beef-noodles.json
  - 避免直接呼叫 Google Maps API，節省 API 配額

### 資料資訊

- **原始資料來源**：Google Maps Places API
- **更新頻率**：每五天
- **資料範圍**：台北市牛肉麵店家
- **資料內容**：店家名稱、評分、評論數、地址、座標

## 🎯 使用說明

### 排序功能

- **評論數排序**：根據店家評論數量排序，評論數越多排名越前
- **評分排序**：根據店家評分排序，評分相同時自動根據評論數進行次要排序

### 區域篩選

- **全部區域**：顯示台北市所有區域的前 60 名店家
- **特定區域**：選擇特定行政區，顯示該區域前 5 名店家

### 地圖功能

- 點擊店家卡片上的 "View" 按鈕
- 自動在新分頁開啟 Google Maps
- 精確定位到該店家位置

## 開發指南

### 原子設計原則

本專案採用原子設計 (Atomic Design) 架構：

1. **Atoms（原子）**：最小的 UI 元件
2. **Molecules（分子）**：由原子組成的簡單元件
3. **Organisms（有機體）**：由分子組成的複雜元件
4. **Templates（模板）**：頁面佈局
5. **Pages（頁面）**：具體的頁面實作

## 🚀 部署指南

### Vercel 部署

本專案使用 Vercel 進行部署。

#### 自動部署

當推送到 main 分支時，Vercel 會自動觸發建置與部署。

- 網站網址：https://taipei-beef-noodles-rank.garylin.dev

## 聲明

- 本站無任何商業營利行為
- 本站資料來源為 Google Maps
- 本站資料僅供參考，不代表任何立場
- 因作者怕橫死街頭，故只顯示前列資料

## 👨‍ 作者

**Gary Lin**

- GitHub: [@garylin0969](https://github.com/garylin0969)
- LinkedIn: [Gary Lin](https://www.linkedin.com/in/garylin0969)
- Facebook: [Gary Lin](https://www.facebook.com/profile.php?id=100009915255579)

---

⭐ 如果這個專案對您有幫助，請給個 Star 支持一下！