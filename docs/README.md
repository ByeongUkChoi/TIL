# 사용방법
##### 깃허브 블로그 주소 https://choibu.github.io/TIL/
## Deploy
- TIL/$ bash ``all.sh`` {커밋메세지}
  1. github master pull,push
  2. vuepress build
  3. github gh-pages push
## 사이드바 구조
### 규칙
 - 폴더 => 1뎁스
 - md파일 (h1) => 2뎁스
 - md파일 (h2) => 3뎁스
### 디렉토리 구조
```
├─ 1.TEST1 ─┬─ README.md
│           ├─ 1.T1-one.md
│           └─ 2.T1-two.md
├─ 2.TEST2 ─┬─ README.md
│           └─ 1.T2-one.md
├─ 1.one.md
├─ 2.two.md
└─ README.md
```
### 사이드바
- HOME
  - (readme.md h1)
    - (h2)
  - one(h1)
    - (h2)
- TEST1
  - (readme.md h1)
    - (h2)
  - T1-one(h1)
    - (h2)
  - T1-two(h1)
    - (h2)
- TEST2
  - (readme.md h1)
    - (h2)
  - T2-one(h1)
    - (h2)
  - T2-one(h1 2nd)
    - (h2)
    - (h2 2nd)
  - ...

<disqus></disqus>
