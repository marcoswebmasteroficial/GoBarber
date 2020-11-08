import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;
export const Pesquisar = styled.div`
grid-area: pesquisar;
background: rgba(248, 245, 245, 0.22);
border-radius: 2px;
cursor: text;
width: 680px;
margin: 0 auto;`;
export const Logo = styled.div`
grid-area: logo;
border-right: 1px #262625 solid;
color: #fff;
font-size: 18px;
text-align: center;
background: #1c1c1f;
height: 60px;
line-height: 60px;
> img {
  object-fit: contain;
  width: 100px;
  height: 40px;
  vertical-align: middle;
}
`;
export const Header = styled.header`
display: grid;
grid-template-areas: "logo pesquisar perfil";
grid-template-columns: 250px auto 60px;
overflow: hidden;
grid-template-rows: 56px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
padding-inline-start: 0;
padding-inline-end: 1%;
align-items: center;
 background: rgb(32, 32, 36);


button {
  margin-left: auto;
  background: transparent;
  border: 0;

  svg {
    color: #999591;
    width: 20px;
    height: 20px;
  }
`;



export const Profile = styled.div`
grid-area: perfil;
`;

export const Content = styled.main`
display: grid;
grid-template-areas: "nav section";
grid-template-columns: max-content auto;
grid-gap: 1px;
height: calc(100% - 100px);
`;

export const Nav = styled.aside `
grid-area: nav;
    width: 70px;
    display: block;
    max-height: 100%;
    overflow: hidden;
    min-height: calc(100vh - 50px);
    -webkit-transition: all .3s ease-in-out 0s;
    transition: all .3s ease-in-out 0s;
    background-color: #202024;

&&:hover {
  width: 250px;
}
&&:hover nav li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
}
&&:hover span {
  display: inline-block;
  margin-left: 10px;
  opacity: 1;
  transition: opacity 2.2s;
  white-space: nowrap;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

nav span {
  top: 2px;
  position: relative;
  opacity: 0;
}
nav li svg:nth-child(1) {
  fill: #7d858e;
  display: inline-block;
  font-size: 26px;
  vertical-align: middle;
  margin-left: 10px;
  color: #7d858e;
}
nav li svg:nth-child(n+2) {
  display: none;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: -webkit-transform 0.3s ease;
  -o-transition: transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
}
&&:hover nav li svg:nth-child(n+2) {
  fill: #7d858e;
  display: inline-block;
  vertical-align: middle;
  color: #7d858e;
  position: relative;
}
&&:hover nav li.menu-expandir svg:nth-child(n+2) {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
nav li a {
  color: #fff;
  padding: 15px;
  position: relative;
  display: block;
  height: 60px;
}
`;
export const Main = styled.section `
grid-area: section;
`;


export const Section = styled.div`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
  }
`;
