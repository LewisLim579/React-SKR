# SKR Front-end Boilerplate

## Specification

-   Enviroment: Node.js(v14 or Higher)
-   Base: `Typescript` + `redux-toolkit` + `MUI`
-   Build: `vite`(rollup)
-   Design System: Storybook(with typescript), MDX(Markdown with JSX) or TSX, Storybook-builder: webpack5(Migration: https://github.com/storybookjs/builder-vite)

## Install VSCode Extsions

1. 좌측 하단 > 설정(톱니바퀴 모양 > Command Pallete... Click, 또는 `Ctrl` + `Shift` + `P` 또는 한글 버전으로 변경한 경우(좌측하단 > 설정 > 명령 팔레트, Click)
2. Install from VSIX 검색 > Click(or Enter)
3. 원하는 vsix 파일(확장 프로그램 설치 파일, \*.visx) 선택

> 프로젝트 내 extension 설치파일 경로(`/.vscode/extensions`)

## Enviroment Variables

> reference: https://velog.io/@katanazero86/Typescript-%EC%97%90%EC%84%9C-import.meta-%EC%82%AC%EC%9A%A9%EB%B2%95  
> node 환경변수를 사용 할 경우 `process.env`를 직접적으로 사용할 수 없고 `import.meta.env`를 사용해야 합니다.

```sh
# .env.production

MY_ENV=skrentacar
```

```ts
const myEnv = import.meta.env.MY_ENV

console.log(myEnv)
// => 'skrentacar'
```

## Storybook(추후 builder Migration 필요)

> reference: https://github.com/storybookjs/builder-vite
> 현재 storybook 빌드 도구가 webpack5로 지정되어 있지만 추후 vite(rollup)을 지원할 것이기 때문에 추후에 안정화 버전 출시에 맞춰 migration이 필요합니다.
> 따라서 위 참고 사이트에 설명대로 추후 변경해야 합니다.
