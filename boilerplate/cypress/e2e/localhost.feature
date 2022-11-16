Feature: localhost
    Scenario: 프로젝트 메인 페이지를 확인한다
        When localhost:3000에 접근한다
        Then Welcome 메시지가 보인다