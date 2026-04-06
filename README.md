# Avenir Iloilo - Premium SOHO Landing Page

> [!CAUTION]
> **Proprietary Notice**: This project and its contents are the exclusive property of **One Horizon Realty (OHR)** and **Avenir Iloilo**. Any unauthorized distribution, reproduction, or use of this source code is strictly prohibited.

Welcome to the official optimized landing page for **Avenir Iloilo**, a premium Small Office / Home Office (SOHO) development located in the heart of Mandurriao, Iloilo City. Proprietary software managed by One Horizon Realty.

## Key Features

- **Architectural Showcase**: High-resolution, optimized architectural renders (compression reduced from 130MB to ~20MB for peak performance).
- **Interactive Gallery**: Premium 7-item bento grid highlighting the Sky Garden, Wellness Pool, and Grand Entrance.
- **Inquiry System**: Integrated with **EmailJS** for instant, professional lead notification with custom HTML templates.
- **Modern UI/UX**: Built with **Framer Motion** for smooth, "living" animations (including breathing pulse indicators for features).
- **SEO Optimized**: Fully semantic HTML5 structure with optimized meta-tags and accessible layout.
- **Vercel Ready**: Pre-configured with proper routing and build settings for instant deployment.

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite, Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data Integration**: EmailJS (@emailjs/browser)
- **Deployment**: Vercel

## Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd avenir-iloilo-improved
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up Environment Variables**:
   Update `ContactForm.tsx` with your **EmailJS Public Key** to activate the inquiry form.

4. **Run development server**:
   ```bash
   pnpm dev
   ```

## 🌐 Deployment on Vercel

The project includes a `vercel.json` file. Simply import the repository to Vercel and it will auto-detect the configuration:
- **Build Command**: `pnpm build`
- **Output Directory**: `dist/public`

---

*Managed by **One Horizon Realty (OHR)**.*
