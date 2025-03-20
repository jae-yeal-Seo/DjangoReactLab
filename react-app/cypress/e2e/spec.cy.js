/// <reference types="cypress" />

describe("로그인", () => {
  it("ID와 PW를 입력하고 로그인 버튼을 클릭한다", () => {
    cy.visit("https://ownedmaker.com/login/");

    // 이메일 입력
    cy.get("input[name='email']").type("woduf9173@naver.com");

    // 비밀번호 입력
    cy.get("input[name='password']").type("250303gG@@");

    // 로그인 버튼 클릭
    cy.get("#submit").click();

    // 로그인 성공 시 이동하는 페이지 확인
    cy.url().should("include", "/admin");

    // '採用コンテンツ作成'을 클릭 (메뉴 확장)
    cy.contains('採用コンテンツ制作').click();

    // '採用サイト' 버튼이 나타날 때까지 기다린 후 클릭
    cy.contains('採用サイト').should('be.visible').click();
    
    // '/recruit' 페이지로 이동했는지 확인
    cy.url().should('include', '/recruit');
  });  
});