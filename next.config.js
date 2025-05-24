/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  typescript: {
    // !! 경고 !!
    // 이 옵션은 프로덕션 빌드에서 타입 검사를 건너뜁니다.
    // 타입 에러가 있어도 빌드가 진행됩니다.
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint 검사도 건너뜁니다.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
