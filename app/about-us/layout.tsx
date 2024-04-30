
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
          {children}
          &copy; Next JS is great!
      </div>
  )
}

/**
 * 
 * &copy; Next JS is great! 는 about-us 하위 페이지에서만 나올 수 있음
 * layout.tsx를 about-us 폴더 안에 만들었기 때문이다
 * 
 * 
 * 제일 상위에 있는 layout.tsx와 현재 layout.tsx는 중첩이 가능하다 서로 상쇄시킨다고 생각하지 말기
 * */ 
