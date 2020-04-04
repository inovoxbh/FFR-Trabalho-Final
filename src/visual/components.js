import styled from "@emotion/styled"

export const LayoutCSS =styled.main`
    font-family: "Open Sans";
    text-align: center;
    background-color: #363636;
    color: white;
    margin: 20px;

    ul {
        margin: 50px;
        padding-inline-start: 0;
    }
`
export const HeaderCSS =styled.header`
    font-size: 150px;
    text-align: center;
    background-color: #E10600;
    font-weight: bold;
`
export const TituloH1CSS = styled.h1`
    font-size: 50px;
    text-align: center;
    background-color: #E10600;
    margin: 0;
`
export const LinkCSS =styled.div`
    font-size: 20px;
    text-decoration: none;

    a:link {
        color: white;
    }
    
    a:visited {
        color: white;
    }

    a:hover {
        color: red;
    }
`
export const NavBarCSS =styled.nav`
    text-align: center;
    
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: black;
    }
    
    li {
        float: left;
    }
    
    li a {
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    
    li a:hover {
        background-color: #363636;
    }
`

export const FooterCSS =styled.footer`
    text-align: center;
    background-color: #E10600;
    font-weight: bold;
`
export const SeasonCSS =styled.div`
    margin: 20px;
`
export const H2ListItemCSS =styled.h2`
    background-color: gray;
    width: 100%;
`
export const SectionCSS =styled.section`
    min-height: 100px;
`