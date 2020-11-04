(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background",attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand fjalla",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link comorant",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link comorant",attrs:{to:{name:"boards"}}},[t._v(t._s(t.$auth.userInfo.name))])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l);c.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){await this.$auth.logout({returnTo:window.location.origin})}}},u=d,p=a("2877"),m=Object(p["a"])(u,n,r,!1,null,null,null),h=m.exports,f=a("335d"),v={name:"App",async beforeCreate(){try{await Object(f["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},b=v,g=(a("5c0b"),Object(p["a"])(b,i,o,!1,null,null,null)),C=g.exports,w=a("8c4f"),k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 land1"},[a("div",{staticClass:"darken-bg row p-3"},[a("div",{staticClass:"d-none d-lg-block col-lg-3"},[a("img",{staticClass:"land-img content-shadow pop fade-in",attrs:{src:"https://images.unsplash.com/photo-1589792924333-edbfbe7c8be7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:""}})]),a("div",{staticClass:"col-12 col-lg-8 darken-bg text-pop fade-in p-4 d-flex flex-column justify-content-around"},[a("h1",{staticClass:"text-left fjalla"},[t._v("Kanban 看板")]),a("blockquote",{staticClass:"blockquote text-center align-self-center"},[a("p",{staticClass:"mb-0 yeseva "},[t._v(" To produce only what is needed, when it is needed and in the amount needed. ")]),a("footer",{staticClass:"blockquote-footer handwritten text-pop"},[t._v("Taiichi Ohno")])]),a("p",{staticClass:"align-self-end text-center nixie"},[t._v("Originally implemented by Toyota in the 1940’s, Kanban fulfillment looked to provide demand based supply chains. By using cards to cue individuals of the larger needs of the team, members were empowered to collaborate efficiently. Taking inspiration from how customers interact with supermarkets, Kanban looks to provide process necessary components as required by their next step applications.")])])])])]),a("div",{staticClass:"spacer"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 land1"},[a("div",{staticClass:"darken-bg row py-3 justify-content-around"},[a("div",{staticClass:"flip-card col-12 col-lg-3 fade-in"},[a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front card-1 content-shadow"}),a("div",{staticClass:"flip-card-back text-pop card-1"},[a("div",{staticClass:"darken-bg d-flex flex-column justify-content-around"},[a("h1",{staticClass:"fjalla"},[t._v("Efficent Orginization")]),a("p",{staticClass:"comorant"},[t._v("Cascading task allow for focused planning")]),a("p",{staticClass:"handwritten"},[t._v("See more at a glance")])])])])]),a("div",{staticClass:"flip-card col-12 col-lg-3 fade-in"},[a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front card-2 content-shadow"}),a("div",{staticClass:"flip-card-back text-pop card-2"},[a("div",{staticClass:"darken-bg d-flex flex-column justify-content-around"},[a("h1",{staticClass:"fjalla"},[t._v("Top Down Tracking")]),a("p",{staticClass:"comorant"},[t._v("Planning with a focus on today")]),a("p",{staticClass:"handwritten"},[t._v("So you can do more together")])])])])]),a("div",{staticClass:"flip-card col-12 col-lg-3 fade-in"},[a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front card-3 content-shadow"}),a("div",{staticClass:"flip-card-back text-pop card-3"},[a("div",{staticClass:"darken-bg d-flex flex-column justify-content-around"},[a("h1",{staticClass:"fjalla"},[t._v("Forward Focused")]),a("p",{staticClass:"comorant"},[t._v("Targets aimed at depoyables")]),a("p",{staticClass:"handwritten"},[t._v("Get more to done")])])])])])])])]),a("div",{staticClass:"spacer"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 land1"},[a("div",{staticClass:"darken-bg row p-3"},[a("div",{staticClass:"col-12 col-lg-8 darken-bg text-pop fade-in p-4 d-flex flex-column justify-content-around"},[a("h1",{staticClass:"text-left fjalla"},[t._v("Kanban for Programming")]),a("h3",{staticClass:"text-center yeseva"},[t._v("Modern workflows for modern applications")]),a("p",{staticClass:"comorant text-center"},[t._v("Work is beter when teams work together. Kanban boards provide a backbone to suport a teams growing workload while giving them room grow alongside the scope of the project. Do more with less and cut down on needless meetings and emails.")])]),a("div",{staticClass:"col-3 d-none d-lg-block"},[a("img",{staticClass:"land-img content-shadow pop fade-in",attrs:{src:"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:""}})])])])]),a("div",{staticClass:"spacer"})])}],x={name:"home",data(){return{}},computed:{},methods:{},components:{}},_=x,B=Object(p["a"])(_,k,y,!1,null,"ea50e09e",null),$=B.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards container-fluid"},[a("div",{staticClass:"row justify-content-around"},[a("div",{staticClass:"col-12 col-lg-3 darken-bg p-4 my-4 content-shadow pop"},[a("h1",{staticClass:"card-title text-pop fade-in fjalla"},[t._v("Add a new board")]),a("form",{staticClass:"row justify-content-center fade-in",on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"col-10 m-1",attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"col-10 m-1",attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-outline-light m-1 fade-in",attrs:{type:"submit"}},[t._v("Create Board")])])]),a("div",{staticClass:"col-12 col-lg-10 card darken-bg my-4 content-shadow"},t._l(t.boards,(function(e){return a("div",{key:e.id,staticClass:"row justify-content-around my-2"},[a("div",{staticClass:"justify-content-between col-10 my-2 pop fade-in p-2 text-pop"},[a("div",{staticClass:"row darken-bg"},[a("div",{staticClass:"col-3 d-none d-lg-block profile-box p-3"},[a("img",{staticClass:"profile my-1",attrs:{src:e.creator.picture,alt:""}}),a("p",{staticClass:"nixie"},[t._v(" "+t._s(e.creator.name)+" ")])]),a("div",{staticClass:"col-12 col-lg-9 d-flex flex-column justify-content-around text-pop"},[a("router-link",{attrs:{to:{name:"board",params:{boardId:e.id}}}},[a("h1",{staticClass:"fjalla"},[t._v(" "+t._s(e.title)+" ")]),a("h4",{staticClass:"comorant"},[t._v(" "+t._s(e.description)+" ")])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteBoard(e.id)}}},[t._v("Delete")])],1)])])])})),0)])])},P=[],j={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){Swal.fire({title:"Are you sure you want to delete this board?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"var(--danger)",cancelButtonColor:"var(--success)",confirmButtonText:"Yes, delete it!",background:"var(--lighttransparent)"}).then(e=>{e.isConfirmed&&(this.$store.dispatch("deleteBoard",t),Swal.fire({title:"Deleted!",text:"Your board has been deleted.",confirmButtonText:"OK",background:"var(--lighttransparent)",icon:"success"}))})}}},L=j,I=Object(p["a"])(L,T,P,!1,null,null,null),E=I.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board container-fluid"},[t.board.title?a("div",[t.editMode?t._e():a("div",{staticClass:"row justify-content-between align-items-center text-dark bg-faded py-2 mb-3 content-shadow-lite"},[a("div",{staticClass:"d-flex fade-in"},[a("i",{staticClass:"fa fa-pencil-alt align-self-center icon-pop ml-2",attrs:{"aria-hidden":"true"},on:{click:t.toggleEdit}}),a("h1",{staticClass:"mx-2 fjalla"},[t._v(t._s(t.board.title))])]),a("div",{staticClass:"justify-content-center mt-2 fade-in"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"New List"},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._m(0)])])]),a("i",{staticClass:"fa fa-times align-self-start mr-3 icon-pop fade-in",attrs:{"aria-hidden":"true"},on:{click:t.deleteBoard}})]),t.editMode?a("div",{staticClass:"row justify-content-between align-items-center text-dark bg-faded pt-2"},[a("div",{staticClass:"mt-2 mb-3 d-flex"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.toggleEdit}},[a("i",{staticClass:"fa fa-undo align-self-center",attrs:{"aria-hidden":"true"}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"New Title"},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.editBoard}},[a("i",{staticClass:"fas fa-save align-self-center"})])])])])]):t._e(),a("div",{staticClass:"row fade-in justify-content-around"},t._l(t.lists,(function(t){return a("list-component",{key:t.id,attrs:{listProp:t}})})),1)]):a("h1",[t._v("Loading...")])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("Create List")])])}],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list col-10 col-lg-3 my-2",attrs:{dropzone:"zone"},on:{drop:function(e){return e.preventDefault(),t.movetask(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[a("div",{staticClass:"card bg-faded content-shadow-lite"},[a("div",{staticClass:"card-body"},[t.editMode?a("div",{staticClass:"row justify-content-between"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.toggleEdit}},[a("i",{staticClass:"fa fa-undo align-self-center",attrs:{"aria-hidden":"true"}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:t.listProp.title},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.editList}},[a("i",{staticClass:"fas fa-save align-self-center"})])])])]):a("div",{staticClass:"row justify-content-between text-dark"},[a("div",{staticClass:"d-flex"},[a("i",{staticClass:"fa fa-pencil-alt mt-2 ml-3 icon-pop",attrs:{"aria-hidden":"true"},on:{click:t.toggleEdit}}),a("h3",{staticClass:"card-title ml-1 yeseva"},[t._v(t._s(t.listProp.title)+" ")])]),a("i",{staticClass:"fa fa-times align-self-start mr-3 icon-pop",attrs:{"aria-hidden":"true"},on:{click:t.deleteList}})]),a("div",{staticClass:"row justify-content-center"},[t._l(t.tasks,(function(t){return a("task-component",{key:t.id,attrs:{taskProp:t,draggable:"true"}})})),a("form",{on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[a("div",{staticClass:"input-group mt-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"New Task"},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}}),t._m(0)])])],2)])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("Create Task")])])}],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card col-12 my-1 py-1 darken-bg content-shadow-lite2",attrs:{id:t.taskProp.id},on:{dragstart:function(e){return t.drag(e)}}},[t.editMode?t._e():a("div",{staticClass:"row justify-content-between px-2"},[a("div",{staticClass:"d-flex justify-content-between"},[a("i",{staticClass:"fa fa-pencil-alt mt-2 mx-1 icon-pop text-pop",attrs:{"aria-hidden":"true"},on:{click:t.toggleEdit}}),a("h4",{staticClass:"card-title comorant text-pop"},[t._v(t._s(t.taskProp.title)+" ")])]),a("i",{staticClass:"fa fa-times align-self-start  icon-pop text-pop",attrs:{"aria-hidden":"true"},on:{click:t.deleteTask}})]),t.editMode?a("div",{staticClass:"row justify-content-between px-1"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.toggleEdit}},[a("i",{staticClass:"fa fa-undo align-self-center",attrs:{"aria-hidden":"true"}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"New Title"},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.editTask}},[a("i",{staticClass:"fas fa-save align-self-center"})])])])]):t._e(),t._l(t.comments,(function(t){return a("comment-component",{key:t.id,staticClass:"row",attrs:{commentProp:t}})})),a("form",{staticClass:"mt-3 mb-1",on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[a("div",{staticClass:"input-group mt-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.title,expression:"newComment.title"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"New Comment"},domProps:{value:t.newComment.title},on:{input:function(e){e.target.composing||t.$set(t.newComment,"title",e.target.value)}}}),t._m(0)])])],2)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])])}],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card bg-faded row mx-2 my-1 p-2 text-dark"},[t.editMode?a("div",{staticClass:"col d-flex flex-column justify-content-between"},[a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.toggleEdit}},[a("i",{staticClass:"fa fa-undo align-self-center",attrs:{"aria-hidden":"true"}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.title,expression:"newComment.title"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:t.commentProp.title},domProps:{value:t.newComment.title},on:{input:function(e){e.target.composing||t.$set(t.newComment,"title",e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.editComment}},[a("i",{staticClass:"fas fa-save align-self-center"})])])])])]):a("div",{staticClass:"col d-flex justify-content-between"},[a("div",{staticClass:"row"},[a("i",{staticClass:"fa fa-pencil-alt mx-1 icon-pop",attrs:{"aria-hidden":"true"},on:{click:t.toggleEdit}}),a("h6",{staticClass:"comorant"},[t._v(t._s(t.commentProp.title)+" ")])]),a("i",{staticClass:"fa fa-times align-self-start  icon-pop",attrs:{"aria-hidden":"true"},on:{click:t.deleteComment}})])])},K=[],q={name:"comment",props:["commentProp"],data(){return{newComment:{title:this.commentProp.title},editMode:!1}},methods:{toggleEdit(){this.editMode=!this.editMode},editComment(){this.newComment.taskId=this.commentProp.taskId,this.newComment.id=this.commentProp.id,this.$store.dispatch("editComment",this.newComment),this.toggleEdit()},deleteComment(){Swal.fire({title:"Are you sure you want to delete this comment?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"var(--danger)",cancelButtonColor:"var(--success)",confirmButtonText:"Yes, delete it!",background:"var(--lighttransparent)"}).then(t=>{t.isConfirmed&&(this.$store.dispatch("deleteComment",this.commentProp),Swal.fire({title:"Deleted!",text:"Your comment has been deleted.",confirmButtonText:"OK",background:"var(--lighttransparent)",icon:"success"}))})}}},U=q,F=Object(p["a"])(U,Y,K,!1,null,null,null),J=F.exports,z={name:"task",data(){return{newComment:{},newTask:{title:this.taskProp.title},editMode:!1,moveMode:!1}},methods:{addComment(){this.newComment.taskId=this.taskProp.id,this.newComment.boardId=this.taskProp.boardId,this.$store.dispatch("addComment",this.newComment),this.newComment={}},editTask(){this.newTask.title?(this.newTask.listId=this.taskProp.listId,this.newTask.id=this.taskProp.id,this.$store.dispatch("editTask",this.newTask),this.toggleEdit()):window.alert("Field cannot be empty")},deleteTask(){Swal.fire({title:"Are you sure you want to delete this task?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"var(--danger)",cancelButtonColor:"var(--success)",confirmButtonText:"Yes, delete it!",background:"var(--lighttransparent)"}).then(t=>{t.isConfirmed&&(this.$store.dispatch("deleteTask",this.taskProp),Swal.fire({title:"Deleted!",text:"Your task has been deleted.",confirmButtonText:"OK",background:"var(--lighttransparent)",icon:"success"}))})},toggleEdit(){this.editMode=!this.editMode},toggleMove(){this.moveMode=!this.moveMode},drag(t){t.dataTransfer.setData("text",JSON.stringify(this.taskProp)),console.log(t)}},mounted(){this.$store.dispatch("getComments",this.taskProp.id)},computed:{comments(){return this.$store.state.comments[this.taskProp.id]},lists(){return this.$store.state.lists}},props:["taskProp"],components:{commentComponent:J}},R=z,W=Object(p["a"])(R,N,A,!1,null,null,null),H=W.exports,Q={name:"listComponent",data(){return{newTask:{},newList:{title:this.listProp.title},editMode:!1}},mounted(){this.$store.dispatch("getTasks",this.listProp.id)},computed:{tasks(){return this.$store.state.tasks[this.listProp.id]}},methods:{addTask(){this.newTask.listId=this.listProp.id,this.newTask.boardId=this.listProp.boardId,this.$store.dispatch("addTask",this.newTask),this.newTask={}},deleteList(){Swal.fire({title:"Are you sure you want to delete this list?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"var(--danger)",cancelButtonColor:"var(--success)",confirmButtonText:"Yes, delete it!",background:"var(--lighttransparent)"}).then(t=>{t.isConfirmed&&(this.$store.dispatch("deleteList",this.listProp.id),Swal.fire({title:"Deleted!",text:"Your list has been deleted.",confirmButtonText:"OK",background:"var(--lighttransparent)",icon:"success"}))})},editList(){this.newList.title?(this.newList.id=this.listProp.id,this.$store.dispatch("editList",this.newList),this.toggleEdit()):window.alert("Field cannot be empty")},toggleEdit(){this.editMode=!this.editMode},movetask(t){t.preventDefault();let e=JSON.parse(t.dataTransfer.getData("text"));e.newId=this.listProp.id,this.$store.dispatch("moveTask",e)}},props:["listProp"],components:{taskComponent:H}},X=Q,Z=Object(p["a"])(X,D,S,!1,null,null,null),G=Z.exports,V={name:"board",mounted(){this.$store.dispatch("setActiveBoard",this.$route.params.boardId),this.$store.dispatch("getLists",this.$route.params.boardId)},data(){return{newList:{title:"",creatorEmail:this.$auth.userInfo.email},newBoard:{title:this.$store.state.activeBoard.title,id:this.$route.params.boardId,creatorEmail:this.$auth.userInfo.email},editMode:!1,listProp:{}}},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},methods:{addList(){this.$store.dispatch("addList",this.newList),this.newList={title:"",creatorEmail:this.$auth.userInfo.email}},toggleEdit(){this.editMode=!this.editMode},editBoard(){this.newBoard.title?(this.$store.dispatch("editBoard",this.newBoard),this.toggleEdit()):window.alert("Field cannot be empty")},deleteBoard(){Swal.fire({title:"Are you sure you want to delete this board?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"var(--danger)",cancelButtonColor:"var(--success)",confirmButtonText:"Yes, delete it!",background:"var(--lighttransparent)"}).then(t=>{t.isConfirmed&&(this.$store.dispatch("deleteBoard",this.$route.params.boardId),Swal.fire({title:"Deleted!",text:"Your board has been deleted.",confirmButtonText:"OK",background:"var(--lighttransparent)",icon:"success"}))})}},components:{listComponent:G},props:["boardId"]},tt=V,et=Object(p["a"])(tt,O,M,!1,null,null,null),at=et.exports;s["a"].use(w["a"]);var st=new w["a"]({routes:[{path:"/",name:"home",component:$},{path:"/boards",name:"boards",component:E,beforeEnter:f["b"]},{path:"/boards/:boardId",name:"board",component:at,beforeEnter:f["b"]},{path:"*",redirect:"/"}]}),it=(a("eebe"),a("2f62"));let ot=location.host.includes("localhost")?"http://localhost:3000/":"/";const nt=c.a.create({baseURL:ot+"api",timeout:3e3,withCredentials:!0});s["a"].use(it["a"]);var rt=new it["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setLists(t,e){t.lists=e},setTasks(t,e){s["a"].set(t.tasks,e.listId,e.tasks)},setComments(t,e){s["a"].set(t.comments,e.taskId,e.comments)}},actions:{setBearer({},t){nt.defaults.headers.authorization=t},resetBearer(){nt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await nt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},getBoards({commit:t,dispatch:e}){nt.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},a){nt.post("boards",a).then(t=>{e("getBoards")})},async setActiveBoard({commit:t,dispatch:e},a){try{let e=await nt.get("boards/"+a);t("setActiveBoard",e.data)}catch(s){console.error(s)}},async editBoard({commit:t,dispatch:e},a){try{await nt.put("boards/"+a.id,a);t("setActiveBoard",a)}catch(s){console.error(s)}},async deleteBoard({commit:t,dispatch:e,state:a},s){try{await nt.delete("boards/"+s),t("setActiveBoard",{}),t("setBoards",a.boards.filter(t=>t.id!=s)),st.push({name:"boards"})}catch(i){console.error(i)}},async getLists({commit:t,dispatch:e},a){let s=await nt.get("boards/"+a+"/lists");t("setLists",s.data)},async addList({commit:t,dispatch:e,state:a},s){s.boardId=a.activeBoard.id,await nt.post("lists/",s).then(t=>{e("getLists",s.boardId)})},async deleteList({commit:t,dispatch:e,state:a},s){try{await nt.delete("lists/"+s),t("setLists",a.lists.filter(t=>t.id!=s))}catch(i){console.error(i)}},async editList({commit:t,dispatch:e,state:a},s){try{await nt.put("lists/"+s.id,s);let e=a.lists,i=e.findIndex(t=>t.id==s.id);e[i].title=s.title,console.log(e),t("setLists",e)}catch(i){console.error(i)}},async getTasks({commit:t,dispatch:e},a){let s=await nt.get("lists/"+a+"/tasks");t("setTasks",{tasks:s.data,listId:a})},async addTask({commit:t,dispatch:e,state:a},s){await nt.post("tasks/",s).then(t=>{e("getTasks",s.listId)})},async deleteTask({commit:t,dispatch:e,state:a},s){try{await nt.delete("tasks/"+s.id).then(t=>{e("getTasks",s.listId)})}catch(i){console.error(i)}},async editTask({commit:t,dispatch:e,state:a},s){try{await nt.put("tasks/"+s.id,s).then(t=>{e("getTasks",s.listId)})}catch(i){console.error(i)}},async moveTask({commit:t,dispatch:e,state:a},s){try{let t=s.listId;s.listId=s.newId;await nt.put("tasks/"+s.id,s).then(a=>{e("getTasks",t),e("getTasks",s.listId)})}catch(i){console.error(i)}},async getComments({commit:t,dispatch:e},a){let s=await nt.get("tasks/"+a+"/comments");t("setComments",{comments:s.data,taskId:a})},async addComment({commit:t,dispatch:e,state:a},s){await nt.post("comments/",s).then(t=>{e("getComments",s.taskId)})},async deleteComment({commit:t,dispatch:e,state:a},s){try{await nt.delete("comments/"+s.id).then(t=>{e("getComments",s.taskId)})}catch(i){console.error(i)}},async editComment({commit:t,dispatch:e,state:a},s){try{await nt.put("comments/"+s.id,s).then(t=>{e("getComments",s.taskId)})}catch(i){console.error(i)}}}});const lt="dev-lhaney.us.auth0.com",ct="https://kanban",dt="RVK7h7muUFfMbZXR2LQkcOX3t6eqD6aZ";s["a"].use(f["a"],{domain:lt,clientId:dt,audience:ct,onRedirectCallback:t=>{st.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:st,store:rt,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"9c0c":function(t,e,a){}});