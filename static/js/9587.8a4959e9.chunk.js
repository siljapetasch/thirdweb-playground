"use strict";(self.webpackChunksilja_demo=self.webpackChunksilja_demo||[]).push([[9587],{9587:(M,N,I)=>{I.d(N,{bloctoWallet:()=>D});var j=I(99326);const D=M=>({id:j.Y.id,recommended:null===M||void 0===M?void 0:M.recommended,meta:{...j.Y.meta,iconURL:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00NC4xNTE0IDI2LjM1NjJDMzguODg4MiAyNi4zNTYyIDMzLjc1MDggMjguMzg1NiAyOS45MTAzIDMxLjk4NTdDMjUuNjk3OSAzNS45MzU0IDIzLjAzMjEgNDEuNzY4NCAyMS41MDQgNDcuMjU1NEMyMC41MDMyIDUwLjg0NjEgMjAuMDAxOCA1NC41NzAyIDIwLjAwMTggNTguMjk2QzIwLjAwMTggNTkuNDIyNyAyMC4wNDggNjAuNTQwMSAyMC4xMzY5IDYxLjY0NDVDMjAuMjQ2IDYyLjk4NzUgMjEuNTU0IDYzLjkxODEgMjIuODU2MyA2My41NjY2QzIzLjk5MjIgNjMuMjYxMyAyNS4xODczIDYzLjA5NjcgMjYuNDE5NCA2My4wOTY3QzI4Ljk1MDIgNjMuMDk2NyAzMS4zMjE5IDYzLjc4NDkgMzMuMzU1IDY0Ljk4NzRDMzMuNDA0OSA2NS4wMTcgMzMuNDUzIDY1LjA0NjYgMzMuNTAyOSA2NS4wNzQzQzM2LjgwNyA2Ny4wNDQ2IDQwLjcwNDkgNjguMTI2OCA0NC44NjE4IDY3Ljk4ODFDNTUuNzA0NSA2Ny42MjkxIDY0LjU2MjEgNTguODA2NiA2NC45NjE4IDQ3Ljk2NTdDNjUuMzk4NCAzNi4xMDU2IDU1LjkxNTMgMjYuMzU0NCA0NC4xNTMzIDI2LjM1NDRMNDQuMTUxNCAyNi4zNTYyWk00NC4xNTE0IDU2LjY5NEMzOC44OTU2IDU2LjY5NCAzNC42MzUyIDUyLjQzMzUgMzQuNjM1MiA0Ny4xNzk2QzM0LjYzNTIgNDEuOTI1NiAzOC44OTU2IDM3LjY2MzIgNDQuMTUxNCAzNy42NjMyQzQ5LjQwNzIgMzcuNjYzMiA1My42Njc3IDQxLjkyMzggNTMuNjY3NyA0Ny4xNzk2QzUzLjY2NzcgNTIuNDM1MiA0OS40MDcyIDU2LjY5NCA0NC4xNTE0IDU2LjY5NFoiIGZpbGw9IiMxNEFBRkYiLz4KPHBhdGggZD0iTTM1LjU4OTcgMTkuNzk1OEMzNS41ODk3IDIyLjUzOTMgMzQuMTUyNCAyNS4wODQ4IDMxLjc5MTggMjYuNDgzNEMzMC4zMDk5IDI3LjM2MjIgMjguOTIwNiAyOC40IDI3LjY2MjYgMjkuNTgyMUMyNC44NzExIDMyLjE5OCAyMi43ODc5IDM1LjQwNzggMjEuMjQ1MSAzOC41ODk3QzIwLjk0MTcgMzkuMjE2OCAyMCAzOC45OTQ5IDIwIDM4LjI5NzRWMTkuNzk1OEMyMCAxNS40OTA5IDIzLjQ5MDkgMTIgMjcuNzk1OCAxMkMzMi4xMDA3IDEyIDM1LjU5MTYgMTUuNDkwOSAzNS41OTE2IDE5Ljc5NThIMzUuNTg5N1oiIGZpbGw9IiMwMDc1RkYiLz4KPC9zdmc+Cg=="},create:N=>new j.Y({...N,...M}),isInstalled:()=>!1})},99326:(M,N,I)=>{I.d(N,{Y:()=>A});var j=I(46170),D=I(20684),g=I(24779),z=I(2566),i=I(73274);I(13631),I(19766);class A extends g.a{constructor(M){null!==M&&void 0!==M&&M.chain&&M.clientId&&(M.chain=(0,i.nRj)(M.chain,M.clientId)),super(A.id,M),(0,j._)(this,"name","Blocto")}async initConnector(){var M,N;const{BloctoConnector:j}=await I.e(1539).then(I.bind(I,31539)),g=new j({chains:this.chains,options:{appId:null===(M=this.options)||void 0===M?void 0:M.appId,chainId:null===(N=this.options)||void 0===N||null===(N=N.chain)||void 0===N?void 0:N.chainId}});return this.connector=new D.W(g),this.connector}async getConnector(){return this.connector?Promise.resolve(this.connector):await this.initConnector()}}(0,j._)(A,"id",z.w.blocto),(0,j._)(A,"meta",{name:"Blocto",iconURL:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIyMzNfMjM4NykiPgo8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHJ4PSIxMiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMyLjkwMjggMTguMzA2M0MyOC4zOTExIDE4LjMwNjMgMjMuOTg3MyAyMC4wNDU5IDIwLjY5NTIgMjMuMTMxOUMxNy4wODQzIDI2LjUxNzYgMTQuNzk5MiAzMS41MTc3IDEzLjQ4OTMgMzYuMjIxMkMxMi42MzE0IDM5LjI5OTIgMTIuMjAxNiA0Mi40OTE1IDEyLjIwMTYgNDUuNjg1M0MxMi4yMDE2IDQ2LjY1MTEgMTIuMjQxMiA0Ny42MDg5IDEyLjMxNzQgNDguNTU1NkMxMi40MTA5IDQ5LjcwNjkgMTMuNTMyMSA1MC41MDQ2IDE0LjY0ODUgNTAuMjAzM0MxNS42MjIyIDQ5Ljk0MTYgMTYuNjQ2NiA0OS44MDA1IDE3LjcwMjggNDkuODAwNUMxOS44NzIyIDQ5LjgwMDUgMjEuOTA1MiA1MC4zOTA0IDIzLjY0OCA1MS40MjEyQzIzLjY5MDggNTEuNDQ2NiAyMy43MzIgNTEuNDcxOSAyMy43NzQ4IDUxLjQ5NTdDMjYuNjA3MSA1My4xODQ2IDI5Ljk0ODQgNTQuMTEyMyAzMy41MTE3IDUzLjk5MzRDNDIuODA2MiA1My42ODU3IDUwLjM5OSA0Ni4xMjMgNTAuNzQxNiAzNi44MzAxQzUxLjExNTggMjYuNjYzNSA0Mi45ODY5IDE4LjMwNDcgMzIuOTA0NCAxOC4zMDQ3TDMyLjkwMjggMTguMzA2M1pNMzIuOTAyOCA0NC4zMTJDMjguMzk3NSA0NC4zMTIgMjQuNzQ1NCA0MC42NTk5IDI0Ljc0NTQgMzYuMTU2MkMyNC43NDU0IDMxLjY1MjUgMjguMzk3NSAyNy45OTg3IDMyLjkwMjggMjcuOTk4N0MzNy40MDgxIDI3Ljk5ODcgNDEuMDYwMiAzMS42NTA5IDQxLjA2MDIgMzYuMTU2MkM0MS4wNjAyIDQwLjY2MTQgMzcuNDA4MSA0NC4zMTIgMzIuOTAyOCA0NC4zMTJaIiBmaWxsPSIjMTRBQUZGIi8+CjxwYXRoIGQ9Ik0yNS41NjM2IDEyLjY4MjZDMjUuNTYzNiAxNS4wMzQ0IDI0LjMzMTUgMTcuMjE2NCAyMi4zMDggMTguNDE1M0MyMS4wMzc3IDE5LjE2ODYgMTkuODQ2OCAyMC4wNTgyIDE4Ljc2ODQgMjEuMDcxNUMxNi4zNzU1IDIzLjMxMzkgMTQuNTg5OCAyNi4wNjUzIDEzLjI2NzMgMjguNzkyOUMxMy4wMDcyIDI5LjMzMDQgMTIuMiAyOS4xNDAyIDEyLjIgMjguNTQyM1YxMi42ODI2QzEyLjIgOC45OTI0MiAxNS4xOTI0IDYgMTguODgyNiA2QzIyLjU3MjggNiAyNS41NjUyIDguOTkyNDIgMjUuNTY1MiAxMi42ODI2SDI1LjU2MzZaIiBmaWxsPSIjMDA3NUZGIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjIzM18yMzg3Ij4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",urls:{android:"https://play.google.com/store/apps/details?id=com.portto.blocto",ios:"https://apps.apple.com/app/blocto/id1481181682"}})}}]);
//# sourceMappingURL=9587.8a4959e9.chunk.js.map