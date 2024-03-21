import { createGlobalStyle } from "styled-components";

const style = createGlobalStyle`  

body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: "proxima-nova-soft", sans-serif;
  -webkit-user-select: none;
} 
  .vertical-centered-box {
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    
  }

* {
  transition: all .3s;
}
.vertical-centered-box:after {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -0.25em;
}
.content {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-size: 0;
}


body {
  /* // background: mix(#3f3251, #002025, 70%); */
}

#prism-logo {
  path {
     fill: #20293b;
     stroke: rgba(255,255,255,1);
     stroke-width: 1px;
  }
}

.loader-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.1);
  margin-left: -60px;
  margin-top: -60px;
  /* // .animation(fade 1.2s infinite ease-in-out); */
}

.loader-line-mask {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 120px;
  margin-left: -60px;
  margin-top: -60px;
  overflow: hidden;
  transform-origin: 60px 60px;
  -webkit-mask-image: -webkit-linear-gradient(top, rgba(0,0,0,1), rgba(0,0,0,0));
  animation: rotate 1.2s infinite linear;
  
}
.loader-line {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
}

#particles-background {
  background-image: -moz-linear-gradient(to right top, #dbe2ef, #bfcce3, #a4b7d7, #88a2cb, #6b8dbf, #597eb1, #476fa4, #336096, #2a5383, #224671, #19395f, #112d4e);
  background-image: linear-gradient(to right top, #dbe2ef, #bfcce3, #a4b7d7, #88a2cb, #6b8dbf, #597eb1, #476fa4, #336096, #2a5383, #224671, #19395f, #112d4e);
}

@keyframes rotate { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);}}

@keyframes fade { 0% { opacity: 1;} 50% { opacity: 0.25;}}

@keyframes fade-in { 0% { opacity: 0;} 100% { opacity: 1;}}

`;

export default style;