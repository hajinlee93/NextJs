"use client"; //backend에서 render되고 frontend에서 hydrate 및 interactive됨을 의미

/**
 * "use client" 는 모든 페이지에서 사용하지 않아도 됨
 * 
 * "use client"가 선언되지 않은 페이지는 알반 html로 보여지는 것만 있는 페이지라고 생각하면 됨
 * "use client"가 있다면 eventlisener가 작동할때 react가 끼어들어 훨씬 빠르게 작동됨 
 * 
 * 그냥 show 시키는 것이 목적인 경우 자바스크립트를 다운로드 받을 필요가 없으므로 로딩속도가 빨라질 수 있다
 * 
 * server component 안에 client component는 존재할 수 있지만 그 반대의 경우(client component 안에 server component)는 존재할 수 없다
 * client component 하위에 있는 component 는 무조건 client component이기 때문이다
 * 
 * 
 * client component내부에서는 보안을 신경써야 되지만 server component 안에서는(client로 코드가 가지 않기 떄문) 보안에 신경쓰지 않아도 된다
 * 
 * */ 

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();
    const [count,setCount] = useState(0);
    return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/">Home</Link> {path === "/" ? "🫣" : ""}
            </li>
            <li>
                <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🫣" : ""}
            </li>
            {/* <li>
                <button onClick={()=>setCount(c => c+1)}>{count}</button>
            </li> */}
        </ul>
    </nav>
    );
}

/**
 * 
 * className={styles.nav} 이런 식으로 자바스크립트 처럼 부르는 이유는 
 * 개발자도구로 켜서 볼 때 nav에 클라스 명이 임의의 랜덤한 text로 오기 때문에 이렇게 부른다
 * -> 클라스 명이 같아도 충돌이 절대 일어날 수 없다
 * 
 * 
 * 
 * */ 