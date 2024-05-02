import { Metadata } from "next"
import Navigation from "../components/navigation"
import "../styles/global.css"

export const metadata :  Metadata = {
  title:{
    template: "%s | Next Movies",
    default : "Loading...",
  },
  description: 'The best movies on the best framework',  // <meta name="description" content="작성내용">
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}


/**
 * 
 * metadata object
 * <head>에 표시되는 정보들
 * metadata는 중첩 되지 않고 병합된다
 * client component에는 존재 할 수 없고 server component에만 존재 할 수 있다
 * metadata에 대한 템플릿도 만들 수 있음
 * title은 꼭 문자열이 아니어도 된다. object일 수 있음
 * 
 * 
 * route groups
 * -> 우리들의 route들을 그룹화해서 logical groups으로 만들 수 있는 기능 
 * 폴더명을 괄호로 묶어 줘야함
 * 괄호로 폴더 명을 감싸주면 url를 바꾸거나 하지 않는다
 * 
*/