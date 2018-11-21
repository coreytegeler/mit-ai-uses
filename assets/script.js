document.addEventListener("DOMContentLoaded",function(){var d,f,i,l,c,a,t,u,h,m,v,p,g,y,e,n,o,L;return document.getElementById("state-of-ai"),document.getElementById("ai-grid-wrap"),g=document.getElementById("ai-grid"),document.querySelectorAll(".ai-view-panel"),e=document.querySelectorAll(".ai-view-title"),g,u=[],f={91:{color:"#009bff",left:{coords:[6,15,16,17,21,22,23,24,26,27,29,30,31,32,33,38,40,42,43,44,45,46,47,49,53,54,56,57,59,60,61,63,64,66,67,68,69,70,71,72,73,74,75,77,80,81,82,83,84,87,88,90,92,93,94,96,100],label:"Natural language processing/</br>generation (NLP/G)",define:"extracts or generates meaning and intent from text in a readable, stylistically natural, and grammatically correct form."},right:{coords:[15,21,24,25,31,33,34,35,42,43,44,45,46,52,53,54,61,62,63,64,65,66,71,72,74,75,81,82,83,92],label:'"Technologies are immature."',define:"of respondents say the technologies are immature."}},10:{color:"#009e20",left:{coords:[9,17,18,19,20,28,29,30,36,37,38,39,40,45,46,47,54,56,57,58,59,60,65,67,68,69,70,77,78,79,80,88,89],label:"Deep learning",define:"is a subfield of machine learning concerned with algorithms inspired by the structure and function of the brain called artificial neural networks."},right:{coords:[6,9,16,17,18,19,20,25,26,27,28,29,30,35,37,38,39,40,45,46,49,50,54,56,59,60,65,67,68,69,70,76,77,79,80,86,89,90,99],label:"“...too expensive.”",define:"of respondents say technologies and expertise are too expensive."}},13:{color:"#ff00c6",left:{coords:[1,2,3,4,5,6,7,8,11,12,14,15,16,17,21,22,23,24,25,26,28,31,32,33,35,36,37,41,42,43,44,45,46,47,49,52,53,56,57,61,62,63,65,66,72,73,74,76,77,78,79,81,82,83,85,86,88,95],label:"Robotic process automation (RPA)",define:"automates repetitive processes performed by people – things like opening email attachments, completing e-forms, entering data."},right:{coords:[4,5,7,12,14,15,17,19,21,22,23,24,25,26,27,28,32,33,34,35,37,42,44,45,46,54,64,65,66,73,75,76,84,85,86,95],label:"“Managers don’t understand...”",define:"of respondents say managers don't understand cognitive technologies and how they work."}},48:{color:"#ff6c00",left:{coords:[26,28,29,34,37,39,40,45,46,47,49,50,54,57,59,63,65,66,67,68,69,70,73,75,76,77,78,79,80,85,88],label:"Physical robots",define:"can perform many different tasks in unpredictable environments, often working alongside human workers."},right:{coords:[3,6,8,9,14,16,19,20,25,27,28,29,30,37,38,39,40,45,47,49,50,54,56,57,58,59,60,64,66,68,69,70,75,77,78,79,80,86,87,88,89,90,95,97,99,100],label:'"Difficult to integrate..."',define:"of respondents say it’s difficult to integrate cognitive projects with existing processes and systems."}},55:{color:"#3e35f9",left:{coords:[6,7,8,9,14,16,17,18,23,25,26,27,28,29,30,34,36,37,38,39,44,45,46,47,49,53,56,57,58,65,66,67,68,69,70,74,76,77,78,84,85,87,88,89,92,93,94,95],label:"Rules-based systems",define:"use databases of knowledge and rules to automate the process of making inferences from information."},right:{coords:[2,11,12,14,21,22,24,25,31,33,34,35,37,42,43,44,45,46,52,53,54,56,57,61,62,63,64,65,66,71,74,75,76,86],label:'"Can\'t get enough people with expertise..."',define:"of respondents can't get enough people with the technology expertise."}},51:{color:"#b9b900",left:{coords:[1,2,3,4,7,11,12,14,15,16,17,18,21,22,23,24,25,26,27,28,31,32,33,34,36,38,42,43,44,45,47,52,53,54,56,61,62,63,64,65,66,67,71,72,73,74,75,77,81,82,83,84,85,87,93,94,95],label:"Statistical machine learning",define:"is the ability of statistical models to improve their performance over time without the need for explicitly programmed instructions."},right:{coords:[22,32,33,35,42,43,44,52,53,54,61,62,64,72,73,82,83],label:'"Technologies have been oversold..."',define:"of respondents say the technologies have been oversold in the marketplace."}},98:{color:"#9400ff",left:{coords:[99],label:"None",define:"Of companies surveyed use no forms of artificial intelligence."},right:{coords:[77,78,87,88,99],label:'"None of these."',define:"of respondents say none of these are challenges."}}},n=function(){var e,t;return function(){for(t=[],e=1;e<=100;e++)t.push(e);return t}.apply(this).forEach(function(e){var t,i,a,n,o,r,s;return(t=document.createElement("div")).classList.add("ai-cell"),t.dataset.index=e,(n=f.hasOwnProperty(e))&&(i=f[e],t.classList.add("ai-eye"),t.addEventListener("click",c),(a=document.createElement("div")).classList.add("ai-fill"),a.style.background=i.color,(r=document.createElement("div")).classList.add("ai-pupil"),(o=document.createElement("div")).classList.add("ai-tooltip","ai-left"),o.innerHTML=i.left.label,(s=document.createElement("div")).classList.add("ai-tooltip","ai-right"),s.innerHTML=i.right.label,t.innerHTML+=a.outerHTML+r.outerHTML+o.outerHTML+s.outerHTML),t=g.appendChild(t),n&&u.push(t),window.addEventListener("mousemove",L),window.addEventListener("resize",L)})},c=function(e){var t,i,a,n,o,r,s;return t=this.dataset.index,s=g.dataset.view,t===g.dataset.index?(g.dataset.index="",g.classList.remove("ai-cell-active"),this.classList.remove("ai-active"),r=document.querySelectorAll('.ai-info-box[data-index="'+t+'"]'),[].forEach.call(r,function(e,t){return e.classList.remove("ai-active")}),l()):(s?o=document.querySelector(".ai-view-panel.ai-"+s):((o=document.querySelector(".ai-view-panel.ai-left")).classList.add("ai-flash"),y(o)),(n=document.querySelectorAll(".ai-info-box.ai-active"))&&[].forEach.call(n,function(e,t){return e.classList.remove("ai-active")}),(a=document.querySelector(".ai-cell.ai-active"))&&a.classList.remove("ai-active"),i=document.querySelectorAll('.ai-info-box[data-index="'+t+'"]'),[].forEach.call(i,function(e,t){return e.classList.add("ai-active")}),g.dataset.index=t,g.classList.add("ai-cell-active"),this.classList.add("ai-active"),l(),m())},m=function(){var e,t,i,a,n,o,r,s,l,c;if(o=g.dataset.index,(c=g.dataset.view)&&o){for(i=(a=f[o])[c].coords,t=a.color,l=[],r=0,s=i.length;r<s;r++)n=i[r],e=g.querySelector('.ai-cell[data-index="'+n+'"]'),l.push(h(e,t,c+o));return l}},h=function(e,t,i){return setTimeout(function(){return e.classList.add("ai-filled"),e.style.background=t,e.dataset.filled=i},400*Math.random())},l=function(){var e;return e=document.getElementsByClassName("ai-filled"),[].forEach.call(e,function(e,t){return i(e)})},i=function(t){return setTimeout(function(){var e;if(e=g.dataset.view+g.dataset.index,!g.dataset.index||t.dataset.filled!==e)return t.style="",t.classList.remove("ai-filled")},400*Math.random())},o=function(){return["left","right"].forEach(function(s,e){var l;return l=document.querySelector(".ai-"+s+" .ai-info"),Object.entries(f).forEach(function(e,t){var i,a,n,o,r;return(a=document.createElement("div")).dataset.index=e[0],a.classList.add("ai-info-box"),a.style.color=e[1].color,r=e[1][s],(o=document.createElement("div")).classList.add("ai-percent"),o.innerHTML=r.coords.length+1+"%",(n=document.createElement("div")).classList.add("ai-label"),n.innerHTML=r.label,a.innerHTML+=o.outerHTML+n.outerHTML,r.define&&((i=document.createElement("div")).classList.add("ai-define"),i.innerHTML=r.define,a.appendChild(i)),l.appendChild(a)})}),[].forEach.call(e,function(e,t){return e.addEventListener("click",a)})},a=function(){var e;return(e=this.parentElement).classList.contains("ai-active")?t(e):y(e)},y=function(e){var t,i,a;return a=e.dataset.view,(i=document.querySelectorAll(".ai-view-panel:not(.ai-"+a+")")).length&&(i[0].classList.remove("ai-active"),i[0].classList.remove("ai-flash"),(t=i[0].querySelector(".ai-info-box.ai-active"))&&t.classList.remove("ai-active")),e.classList.add("ai-active"),g.dataset.view=a,l(),m()},t=function(e){var t;return g.dataset.view="",g.dataset.index="",g.classList.remove("ai-cell-active"),e.classList.remove("ai-active"),e.classList.remove("ai-flash"),(t=e.querySelector(".ai-info-box.ai-active"))&&t.classList.remove("ai-active"),l()},d=function(e,t){this.x=e,this.y=t,this.add=function(e){return this.x+=e.x,this.y+=e.y,this},this.min=function(e){return this.x-=e.x,this.y-=e.y,this}},p=function(e,t,i){return new d(e.x+Math.cos(Math.radians(t))*i,e.y+Math.sin(Math.radians(t))*i)},L=function(e){var t,i,c,a;return a=window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop,i="resize"===e.type?(t=window.innerWidth/2,window.innerHeight/2):(t=e.clientX,e.clientY+a),c=new d(t,i),u.forEach(function(e,t){var i,a,n,o,r,s,l;return o=v(e),n=new d(e.offsetWidth/2,e.offsetWidth/2),l=e.querySelector(".ai-pupil"),i=Math.getDegBetween(o,c),a=e.offsetWidth/2-l.offsetWidth,s=p(n,i,a),r=new d(l.offsetWidth/2,l.offsetWidth/2),s.min(r),l.style.top=s.y+"px",l.style.left=s.x+"px"})},v=function(e){var t,i;for(i=t=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-e.scrollLeft,i+=e.offsetTop-e.scrollTop,e=e.offsetParent;return new d(t,i)},Math.radians=function(e){return e*Math.PI/180},Math.degrees=function(e){return 180*e/Math.PI},Math.getDegBetween=function(e,t){var i;return(i=-1*Math.degrees(Math.atan2(e.x-t.x,e.y-t.y))-90)<0?360+i:i},o(),n()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5jb2ZmZWUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiUG9pbnQiLCJjZWxsT2JqcyIsImNsZWFyQ2VsbCIsImNsZWFyQ2VsbHMiLCJjbGlja0V5ZUNlbGwiLCJjbGlja1BhbmVsIiwiY2xvc2VQYW5lbCIsImV5ZXMiLCJmaWxsQ2VsbCIsImZpbGxDZWxscyIsImdldFBvc2l0aW9uIiwiZ2V0UmVsYXRpdmVQb2ludCIsImdyaWQiLCJvcGVuUGFuZWwiLCJwYW5lbFRpdGxlcyIsInNldHVwR3JpZCIsInNldHVwUGFuZWxzIiwidHJhY2tFeWVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiOTEiLCJjb2xvciIsImxlZnQiLCJjb29yZHMiLCJsYWJlbCIsImRlZmluZSIsInJpZ2h0IiwiMTAiLCIxMyIsIjQ4IiwiNTUiLCI1MSIsIjk4IiwiaiIsInJlc3VsdHMiLCJmb3JFYWNoIiwiaSIsImNlbGwiLCJjZWxsT2JqIiwiZmlsbCIsImlzRXllIiwibGVmdExhYmVsIiwicHVwaWwiLCJyaWdodExhYmVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJpbmRleCIsImhhc093blByb3BlcnR5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaW5uZXJIVE1MIiwib3V0ZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwid2luZG93IiwiZSIsImluZm9Cb3giLCJvdGhlckNlbGwiLCJvdGhlckluZm9Cb3giLCJwYW5lbCIsInRoZXNlSW5mb0JveCIsInZpZXciLCJ0aGlzIiwicmVtb3ZlIiwiY2FsbCIsInRoaXNJbmZvQm94IiwicXVlcnlTZWxlY3RvciIsInN0YXQiLCJleWVLZXkiLCJsZW4iLCJsZW5ndGgiLCJmaWxsZWQiLCJzZXRUaW1lb3V0IiwiTWF0aCIsInJhbmRvbSIsImZpbGxlZENlbGxzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImluZm8iLCJPYmplY3QiLCJlbnRyaWVzIiwicGVyY2VudCIsInByb3BzIiwicGFuZWxUaXRsZSIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsIm90aGVyUGFuZWwiLCJ4IiwieSIsInciLCJtaW4iLCJtIiwiZGVnIiwiZGlzdCIsImNvcyIsInJhZGlhbnMiLCJzaW4iLCJjbGllbnRYIiwiY2xpZW50WSIsImN1cnNvciIsInNjcm9sbFkiLCJzY3JvbGxUb3AiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInR5cGUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJleWUiLCJkZWdyZWVzIiwiZGlzdGFuY2UiLCJleWVNaWQiLCJleWVQb3NpdGlvbiIsIm1pbnVzIiwibmV3UHVwaWwiLCJvZmZzZXRXaWR0aCIsImdldERlZ0JldHdlZW4iLCJ0b3AiLCJlbCIsImlzTmFOIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInNjcm9sbExlZnQiLCJvZmZzZXRQYXJlbnQiLCJQSSIsImEiLCJiIiwiYXRhbjIiXSwibWFwcGluZ3MiOiJBQUFBQSxTQUFTQyxpQkFBaUIsbUJBQW9CLFdBRTdDLElBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLFNBQU9uQixTQUFTb0IsZUFBZSxlQUNwQnBCLFNBQVNvQixlQUFlLGdCQUNuQ04sRUFBT2QsU0FBU29CLGVBQWUsV0FDdEJwQixTQUFTcUIsaUJBQWlCLGtCQUNuQ0wsRUFBY2hCLFNBQVNxQixpQkFBaUIsa0JBQ2hDUCxFQVVSTCxFQUFPLEdBRVBOLEVBQ0MsQ0FBQW1CLEdBQ0MsQ0FBQUMsTUFaTSxVQWFOQyxLQUNDLENBQUFDLE9BQVEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FDaExDLE1BQU8sc0RBQ1BDLE9BQVEsNEhBQ1RDLE1BQ0MsQ0FBQUgsT0FBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUNoR0MsTUFBTywrQkFDUEMsT0FBUSxzREFDVkUsR0FDQyxDQUFBTixNQXJCTSxVQXNCTkMsS0FDQyxDQUFBQyxPQUFRLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQ3hHQyxNQUFPLGdCQUNQQyxPQUFRLHNKQUNUQyxNQUNDLENBQUFILE9BQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFDekhDLE1BQU8sc0JBQ1BDLE9BQVEscUVBQ1ZHLEdBQ0MsQ0FBQVAsTUE5QkssVUErQkxDLEtBQ0MsQ0FBQUMsT0FBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQzVLQyxNQUFPLG1DQUNQQyxPQUFRLGtJQUNUQyxNQUNDLENBQUFILE9BQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFDL0dDLE1BQU8saUNBQ1BDLE9BQVEsMkZBQ1ZJLEdBQ0MsQ0FBQVIsTUF2Q08sVUF3Q1BDLEtBQ0MsQ0FBQUMsT0FBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQ25HQyxNQUFPLGtCQUNQQyxPQUFRLDBHQUNUQyxNQUNDLENBQUFILE9BQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUM1SUMsTUFBTyw4QkFDUEMsT0FBUSwyR0FDVkssR0FDQyxDQUFBVCxNQWhETyxVQWlEUEMsS0FDQyxDQUFBQyxPQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQ2xKQyxNQUFPLHNCQUNQQyxPQUFRLHVHQUNUQyxNQUNDLENBQUFILE9BQVEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUMzR0MsTUFBTywrQ0FDUEMsT0FBUSwwRUFDVk0sR0FDQyxDQUFBVixNQXpESyxVQTBETEMsS0FDQyxDQUFBQyxPQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFH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QkFDVCxJQUFJMUgsRUFBTXdGLEVBQUdDLElBRWRkLEtBQUtxQixRQUFVLFNBQUNZLFVBQ2ZBLEVBQVVqQyxLQUFLZ0QsR0FBRyxLQUVuQmhELEtBQUtpQyxRQUFVLFNBQUNaLFVBQ0wsSUFBVkEsRUFBY3JCLEtBQUtnRCxJQUVwQmhELEtBQUt3QyxjQUFnQixTQUFDUyxFQUFHQyxHQUN4QixJQUFBaEMsRUFDQSxPQURBQSxHQUE0RCxFQUF0RGxCLEtBQUtpQyxRQUFRakMsS0FBS21ELE1BQU1GLEVBQUVwQyxFQUFLcUMsRUFBRXJDLEVBQUlvQyxFQUFFbkMsRUFBS29DLEVBQUVwQyxJQUFZLElBQ3ZELEVBQU8sSUFBTUksRUFBU0EsR0FXaEM3RSxJQUNBRCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdET01Db250ZW50TG9hZGVkJywgKCkgLT5cblxuXHRyb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlLW9mLWFpJylcblx0Z3JpZFdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWktZ3JpZC13cmFwJylcblx0Z3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhaS1ncmlkJylcblx0cGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFpLXZpZXctcGFuZWwnKVxuXHRwYW5lbFRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5haS12aWV3LXRpdGxlJylcblx0ZmllbGQgPSBncmlkXG5cblx0YXp1cmUgPSAnIzAwOWJmZidcblx0Z3JlZW4gPSAnIzAwOWUyMCdcblx0cGluayA9ICcjZmYwMGM2J1xuXHRvcmFuZ2UgPSAnI2ZmNmMwMCdcblx0cHVycGxlID0gJyMzZTM1ZjknXG5cdGdvbGQgPSAnI2I5YjkwMCdcblx0dmlvbGV0ID0gJyM5NDAwZmYnXG5cblx0ZXllcyA9IFtdXG5cblx0Y2VsbE9ianMgPVxuXHRcdDkxOlxuXHRcdFx0Y29sb3I6IGF6dXJlLFxuXHRcdFx0bGVmdDpcblx0XHRcdFx0Y29vcmRzOiBbNiwxNSwxNiwxNywyMSwyMiwyMywyNCwyNiwyNywyOSwzMCwzMSwzMiwzMywzOCw0MCw0Miw0Myw0NCw0NSw0Niw0Nyw0OSw1Myw1NCw1Niw1Nyw1OSw2MCw2MSw2Myw2NCw2Niw2Nyw2OCw2OSw3MCw3MSw3Miw3Myw3NCw3NSw3Nyw4MCw4MSw4Miw4Myw4NCw4Nyw4OCw5MCw5Miw5Myw5NCw5NiwxMDBdLFxuXHRcdFx0XHRsYWJlbDogJ05hdHVyYWwgbGFuZ3VhZ2UgcHJvY2Vzc2luZy88L2JyPmdlbmVyYXRpb24gKE5MUC9HKScsXG5cdFx0XHRcdGRlZmluZTogJ2V4dHJhY3RzIG9yIGdlbmVyYXRlcyBtZWFuaW5nIGFuZCBpbnRlbnQgZnJvbSB0ZXh0IGluIGEgcmVhZGFibGUsIHN0eWxpc3RpY2FsbHkgbmF0dXJhbCwgYW5kIGdyYW1tYXRpY2FsbHkgY29ycmVjdCBmb3JtLidcblx0XHRcdHJpZ2h0OlxuXHRcdFx0XHRjb29yZHM6IFsxNSwyMSwyNCwyNSwzMSwzMywzNCwzNSw0Miw0Myw0NCw0NSw0Niw1Miw1Myw1NCw2MSw2Miw2Myw2NCw2NSw2Niw3MSw3Miw3NCw3NSw4MSw4Miw4Myw5Ml0sXG5cdFx0XHRcdGxhYmVsOiAnXCJUZWNobm9sb2dpZXMgYXJlIGltbWF0dXJlLlwiJyxcblx0XHRcdFx0ZGVmaW5lOiAnb2YgcmVzcG9uZGVudHMgc2F5IHRoZSB0ZWNobm9sb2dpZXMgYXJlIGltbWF0dXJlLidcblx0XHQxMDpcblx0XHRcdGNvbG9yOiBncmVlbixcblx0XHRcdGxlZnQ6XG5cdFx0XHRcdGNvb3JkczogWzksMTcsMTgsMTksMjAsMjgsMjksMzAsMzYsMzcsMzgsMzksNDAsNDUsNDYsNDcsNTQsNTYsNTcsNTgsNTksNjAsNjUsNjcsNjgsNjksNzAsNzcsNzgsNzksODAsODgsODldLFxuXHRcdFx0XHRsYWJlbDogJ0RlZXAgbGVhcm5pbmcnLFxuXHRcdFx0XHRkZWZpbmU6ICdpcyBhIHN1YmZpZWxkIG9mIG1hY2hpbmUgbGVhcm5pbmcgY29uY2VybmVkIHdpdGggYWxnb3JpdGhtcyBpbnNwaXJlZCBieSB0aGUgc3RydWN0dXJlIGFuZCBmdW5jdGlvbiBvZiB0aGUgYnJhaW4gY2FsbGVkIGFydGlmaWNpYWwgbmV1cmFsIG5ldHdvcmtzLidcblx0XHRcdHJpZ2h0OlxuXHRcdFx0XHRjb29yZHM6IFs2LDksMTYsMTcsMTgsMTksMjAsMjUsMjYsMjcsMjgsMjksMzAsMzUsMzcsMzgsMzksNDAsNDUsNDYsNDksNTAsNTQsNTYsNTksNjAsNjUsNjcsNjgsNjksNzAsNzYsNzcsNzksODAsODYsODksOTAsOTldLFxuXHRcdFx0XHRsYWJlbDogJ+KAnC4uLnRvbyBleHBlbnNpdmUu4oCdJyxcblx0XHRcdFx0ZGVmaW5lOiAnb2YgcmVzcG9uZGVudHMgc2F5IHRlY2hub2xvZ2llcyBhbmQgZXhwZXJ0aXNlIGFyZSB0b28gZXhwZW5zaXZlLidcblx0XHQxMzpcblx0XHRcdGNvbG9yOiBwaW5rLFxuXHRcdFx0bGVmdDpcblx0XHRcdFx0Y29vcmRzOiBbMSwyLDMsNCw1LDYsNyw4LDExLDEyLDE0LDE1LDE2LDE3LDIxLDIyLDIzLDI0LDI1LDI2LDI4LDMxLDMyLDMzLDM1LDM2LDM3LDQxLDQyLDQzLDQ0LDQ1LDQ2LDQ3LDQ5LDUyLDUzLDU2LDU3LDYxLDYyLDYzLDY1LDY2LDcyLDczLDc0LDc2LDc3LDc4LDc5LDgxLDgyLDgzLDg1LDg2LDg4LDk1XSxcblx0XHRcdFx0bGFiZWw6ICdSb2JvdGljIHByb2Nlc3MgYXV0b21hdGlvbiAoUlBBKScsXG5cdFx0XHRcdGRlZmluZTogJ2F1dG9tYXRlcyByZXBldGl0aXZlIHByb2Nlc3NlcyBwZXJmb3JtZWQgYnkgcGVvcGxlIOKAkyB0aGluZ3MgbGlrZSBvcGVuaW5nIGVtYWlsIGF0dGFjaG1lbnRzLCBjb21wbGV0aW5nIGUtZm9ybXMsIGVudGVyaW5nIGRhdGEuJ1xuXHRcdFx0cmlnaHQ6XG5cdFx0XHRcdGNvb3JkczogWzQsNSw3LDEyLDE0LDE1LDE3LDE5LDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDMyLDMzLDM0LDM1LDM3LDQyLDQ0LDQ1LDQ2LDU0LDY0LDY1LDY2LDczLDc1LDc2LDg0LDg1LDg2LDk1XSxcblx0XHRcdFx0bGFiZWw6ICfigJxNYW5hZ2VycyBkb27igJl0IHVuZGVyc3RhbmQuLi7igJ0nLFxuXHRcdFx0XHRkZWZpbmU6ICdvZiByZXNwb25kZW50cyBzYXkgbWFuYWdlcnMgZG9uXFwndCB1bmRlcnN0YW5kIGNvZ25pdGl2ZSB0ZWNobm9sb2dpZXMgYW5kIGhvdyB0aGV5IHdvcmsuJ1xuXHRcdDQ4OlxuXHRcdFx0Y29sb3I6IG9yYW5nZSxcblx0XHRcdGxlZnQ6XG5cdFx0XHRcdGNvb3JkczogWzI2LDI4LDI5LDM0LDM3LDM5LDQwLDQ1LDQ2LDQ3LDQ5LDUwLDU0LDU3LDU5LDYzLDY1LDY2LDY3LDY4LDY5LDcwLDczLDc1LDc2LDc3LDc4LDc5LDgwLDg1LDg4XSxcblx0XHRcdFx0bGFiZWw6ICdQaHlzaWNhbCByb2JvdHMnLFxuXHRcdFx0XHRkZWZpbmU6ICdjYW4gcGVyZm9ybSBtYW55IGRpZmZlcmVudCB0YXNrcyBpbiB1bnByZWRpY3RhYmxlIGVudmlyb25tZW50cywgb2Z0ZW4gd29ya2luZyBhbG9uZ3NpZGUgaHVtYW4gd29ya2Vycy4nXG5cdFx0XHRyaWdodDpcblx0XHRcdFx0Y29vcmRzOiBbMyw2LDgsOSwxNCwxNiwxOSwyMCwyNSwyNywyOCwyOSwzMCwzNywzOCwzOSw0MCw0NSw0Nyw0OSw1MCw1NCw1Niw1Nyw1OCw1OSw2MCw2NCw2Niw2OCw2OSw3MCw3NSw3Nyw3OCw3OSw4MCw4Niw4Nyw4OCw4OSw5MCw5NSw5Nyw5OSwxMDBdLFxuXHRcdFx0XHRsYWJlbDogJ1wiRGlmZmljdWx0IHRvIGludGVncmF0ZS4uLlwiJyxcblx0XHRcdFx0ZGVmaW5lOiAnb2YgcmVzcG9uZGVudHMgc2F5IGl04oCZcyBkaWZmaWN1bHQgdG8gaW50ZWdyYXRlIGNvZ25pdGl2ZSBwcm9qZWN0cyB3aXRoIGV4aXN0aW5nIHByb2Nlc3NlcyBhbmQgc3lzdGVtcy4nXG5cdFx0NTU6XG5cdFx0XHRjb2xvcjogcHVycGxlLFxuXHRcdFx0bGVmdDpcblx0XHRcdFx0Y29vcmRzOiBbNiw3LDgsOSwxNCwxNiwxNywxOCwyMywyNSwyNiwyNywyOCwyOSwzMCwzNCwzNiwzNywzOCwzOSw0NCw0NSw0Niw0Nyw0OSw1Myw1Niw1Nyw1OCw2NSw2Niw2Nyw2OCw2OSw3MCw3NCw3Niw3Nyw3OCw4NCw4NSw4Nyw4OCw4OSw5Miw5Myw5NCw5NV0sXG5cdFx0XHRcdGxhYmVsOiAnUnVsZXMtYmFzZWQgc3lzdGVtcycsXG5cdFx0XHRcdGRlZmluZTogJ3VzZSBkYXRhYmFzZXMgb2Yga25vd2xlZGdlIGFuZCBydWxlcyB0byBhdXRvbWF0ZSB0aGUgcHJvY2VzcyBvZiBtYWtpbmcgaW5mZXJlbmNlcyBmcm9tIGluZm9ybWF0aW9uLidcblx0XHRcdHJpZ2h0OlxuXHRcdFx0XHRjb29yZHM6IFsyLDExLDEyLDE0LDIxLDIyLDI0LDI1LDMxLDMzLDM0LDM1LDM3LDQyLDQzLDQ0LDQ1LDQ2LDUyLDUzLDU0LDU2LDU3LDYxLDYyLDYzLDY0LDY1LDY2LDcxLDc0LDc1LDc2LDg2XSxcblx0XHRcdFx0bGFiZWw6ICdcIkNhblxcJ3QgZ2V0IGVub3VnaCBwZW9wbGUgd2l0aCBleHBlcnRpc2UuLi5cIicsXG5cdFx0XHRcdGRlZmluZTogJ29mIHJlc3BvbmRlbnRzIGNhblxcJ3QgZ2V0IGVub3VnaCBwZW9wbGUgd2l0aCB0aGUgdGVjaG5vbG9neSBleHBlcnRpc2UuJ1xuXHRcdDUxOlxuXHRcdFx0Y29sb3I6IGdvbGQsXG5cdFx0XHRsZWZ0OlxuXHRcdFx0XHRjb29yZHM6IFsxLDIsMyw0LDcsMTEsMTIsMTQsMTUsMTYsMTcsMTgsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMzEsMzIsMzMsMzQsMzYsMzgsNDIsNDMsNDQsNDUsNDcsNTIsNTMsNTQsNTYsNjEsNjIsNjMsNjQsNjUsNjYsNjcsNzEsNzIsNzMsNzQsNzUsNzcsODEsODIsODMsODQsODUsODcsOTMsOTQsOTVdLFxuXHRcdFx0XHRsYWJlbDogJ1N0YXRpc3RpY2FsIG1hY2hpbmUgbGVhcm5pbmcnLFxuXHRcdFx0XHRkZWZpbmU6ICdpcyB0aGUgYWJpbGl0eSBvZiBzdGF0aXN0aWNhbCBtb2RlbHMgdG8gaW1wcm92ZSB0aGVpciBwZXJmb3JtYW5jZSBvdmVyIHRpbWUgd2l0aG91dCB0aGXCoG5lZWQgZm9yIGV4cGxpY2l0bHkgcHJvZ3JhbW1lZCBpbnN0cnVjdGlvbnMuJ1xuXHRcdFx0cmlnaHQ6XG5cdFx0XHRcdGNvb3JkczogWzIyLDMyLDMzLDM1LDQyLDQzLDQ0LDUyLDUzLDU0LDYxLDYyLDY0LDcyLDczLDgyLDgzXSxcblx0XHRcdFx0bGFiZWw6ICdcIlRlY2hub2xvZ2llcyBoYXZlIGJlZW4gb3ZlcnNvbGQuLi5cIicsXG5cdFx0XHRcdGRlZmluZTogJ29mIHJlc3BvbmRlbnRzIHNheSB0aGUgdGVjaG5vbG9naWVzIGhhdmUgYmVlbiBvdmVyc29sZCBpbiB0aGUgbWFya2V0cGxhY2UuJ1xuXHRcdDk4OlxuXHRcdFx0Y29sb3I6IHZpb2xldCxcblx0XHRcdGxlZnQ6XG5cdFx0XHRcdGNvb3JkczogWzk5XSxcblx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0ZGVmaW5lOiAnT2YgY29tcGFuaWVzIHN1cnZleWVkIHVzZSBubyBmb3JtcyBvZiBhcnRpZmljaWFsIGludGVsbGlnZW5jZS4nXG5cdFx0XHRyaWdodDpcblx0XHRcdFx0Y29vcmRzOiBbNzcsNzgsODcsODgsOTldLFxuXHRcdFx0XHRsYWJlbDogJ1wiTm9uZSBvZiB0aGVzZS5cIicsXG5cdFx0XHRcdGRlZmluZTogJ29mIHJlc3BvbmRlbnRzIHNheSBub25lIG9mIHRoZXNlIGFyZSBjaGFsbGVuZ2VzLidcblx0XHRcblx0c2V0dXBHcmlkID0gKCkgLT5cblx0XHRbMS4uMTAwXS5mb3JFYWNoIChpKSAtPlxuXHRcdFx0Y2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoJ2FpLWNlbGwnKVxuXHRcdFx0Y2VsbC5kYXRhc2V0LmluZGV4ID0gaVxuXHRcdFx0aXNFeWUgPSBjZWxsT2Jqcy5oYXNPd25Qcm9wZXJ0eShpKVxuXHRcdFx0aWYgaXNFeWVcblx0XHRcdFx0Y2VsbE9iaiA9IGNlbGxPYmpzW2ldXG5cblx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKCdhaS1leWUnKVxuXHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgY2xpY2tFeWVDZWxsXG5cblx0XHRcdFx0ZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRcdGZpbGwuY2xhc3NMaXN0LmFkZCgnYWktZmlsbCcpXG5cdFx0XHRcdGZpbGwuc3R5bGUuYmFja2dyb3VuZCA9IGNlbGxPYmouY29sb3JcblxuXHRcdFx0XHRwdXBpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRcdHB1cGlsLmNsYXNzTGlzdC5hZGQoJ2FpLXB1cGlsJylcblxuXHRcdFx0XHRsZWZ0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0XHRsZWZ0TGFiZWwuY2xhc3NMaXN0LmFkZCgnYWktdG9vbHRpcCcsICdhaS1sZWZ0Jylcblx0XHRcdFx0bGVmdExhYmVsLmlubmVySFRNTCA9IGNlbGxPYmoubGVmdC5sYWJlbFxuXG5cdFx0XHRcdHJpZ2h0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0XHRyaWdodExhYmVsLmNsYXNzTGlzdC5hZGQoJ2FpLXRvb2x0aXAnLCAnYWktcmlnaHQnKVxuXHRcdFx0XHRyaWdodExhYmVsLmlubmVySFRNTCA9IGNlbGxPYmoucmlnaHQubGFiZWxcblxuXHRcdFx0XHRjZWxsLmlubmVySFRNTCs9ZmlsbC5vdXRlckhUTUwrcHVwaWwub3V0ZXJIVE1MK2xlZnRMYWJlbC5vdXRlckhUTUwrcmlnaHRMYWJlbC5vdXRlckhUTUxcblxuXHRcdFx0Y2VsbCA9IGdyaWQuYXBwZW5kQ2hpbGQoY2VsbClcblxuXHRcdFx0aWYgaXNFeWVcblx0XHRcdFx0ZXllcy5wdXNoKGNlbGwpXG5cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICdtb3VzZW1vdmUnLCB0cmFja0V5ZXNcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICdyZXNpemUnLCB0cmFja0V5ZXNcblxuXHRjbGlja0V5ZUNlbGwgPSAoZSkgLT5cblx0XHRpbmRleCA9IHRoaXMuZGF0YXNldC5pbmRleFxuXHRcdHZpZXcgPSBncmlkLmRhdGFzZXQudmlld1xuXHRcdGlmIGluZGV4ID09IGdyaWQuZGF0YXNldC5pbmRleFxuXHRcdFx0Z3JpZC5kYXRhc2V0LmluZGV4ID0gJydcblx0XHRcdGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnYWktY2VsbC1hY3RpdmUnKVxuXHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhaS1hY3RpdmUnKVxuXHRcdFx0dGhlc2VJbmZvQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFpLWluZm8tYm94W2RhdGEtaW5kZXg9XCInK2luZGV4KydcIl0nKVxuXHRcdFx0W10uZm9yRWFjaC5jYWxsIHRoZXNlSW5mb0JveCwgKHRoaXNJbmZvQm94LCBpKSAtPlxuXHRcdFx0XHR0aGlzSW5mb0JveC5jbGFzc0xpc3QucmVtb3ZlKCdhaS1hY3RpdmUnKVxuXHRcdFx0cmV0dXJuIGNsZWFyQ2VsbHMoKVxuXG5cdFx0aWYgIXZpZXdcblx0XHRcdHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpLXZpZXctcGFuZWwuYWktbGVmdCcpXG5cdFx0XHRwYW5lbC5jbGFzc0xpc3QuYWRkKCdhaS1mbGFzaCcpXG5cdFx0XHRvcGVuUGFuZWwocGFuZWwpXG5cdFx0ZWxzZVxuXHRcdFx0cGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWktdmlldy1wYW5lbC5haS0nK3ZpZXcpXG5cblx0XHRpZiBvdGhlckluZm9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWktaW5mby1ib3guYWktYWN0aXZlJylcblx0XHRcdFtdLmZvckVhY2guY2FsbCBvdGhlckluZm9Cb3gsICh0aGlzSW5mb0JveCwgaSkgLT5cblx0XHRcdFx0dGhpc0luZm9Cb3guY2xhc3NMaXN0LnJlbW92ZSgnYWktYWN0aXZlJylcblxuXHRcdGlmIG90aGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haS1jZWxsLmFpLWFjdGl2ZScpXG5cdFx0XHRvdGhlckNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWktYWN0aXZlJylcblxuXHRcdGluZm9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWktaW5mby1ib3hbZGF0YS1pbmRleD1cIicraW5kZXgrJ1wiXScpXG5cdFx0W10uZm9yRWFjaC5jYWxsIGluZm9Cb3gsIChzdGF0LCBpKSAtPlxuXHRcdFx0c3RhdC5jbGFzc0xpc3QuYWRkKCdhaS1hY3RpdmUnKVxuXHRcdGdyaWQuZGF0YXNldC5pbmRleCA9IGluZGV4XG5cdFx0Z3JpZC5jbGFzc0xpc3QuYWRkKCdhaS1jZWxsLWFjdGl2ZScpXG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdhaS1hY3RpdmUnKVxuXHRcdGNsZWFyQ2VsbHMoKVxuXHRcdGZpbGxDZWxscygpXG5cblx0ZmlsbENlbGxzID0gKCkgLT5cblx0XHRpbmRleCA9IGdyaWQuZGF0YXNldC5pbmRleFxuXHRcdHZpZXcgPSBncmlkLmRhdGFzZXQudmlld1xuXHRcdGlmICF2aWV3IHx8ICFpbmRleFxuXHRcdFx0cmV0dXJuXG5cdFx0ZXllS2V5ID0gY2VsbE9ianNbaW5kZXhdXG5cdFx0Y29vcmRzID0gZXllS2V5W3ZpZXddLmNvb3Jkc1xuXHRcdGNvbG9yID0gZXllS2V5LmNvbG9yXG5cdFx0Zm9yIGkgaW4gY29vcmRzXG5cdFx0XHRjZWxsID0gZ3JpZC5xdWVyeVNlbGVjdG9yKCcuYWktY2VsbFtkYXRhLWluZGV4PVwiJytpKydcIl0nKVxuXHRcdFx0ZmlsbENlbGwoY2VsbCwgY29sb3IsIHZpZXcraW5kZXgpXG5cdFx0XHRcblxuXHRmaWxsQ2VsbCA9IChjZWxsLCBjb2xvciwgZmlsbGVkKSAtPlxuXHRcdHNldFRpbWVvdXQgKCkgLT5cblx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZCgnYWktZmlsbGVkJylcblx0XHRcdGNlbGwuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yXG5cdFx0XHRjZWxsLmRhdGFzZXQuZmlsbGVkID0gZmlsbGVkXG5cdFx0LCBNYXRoLnJhbmRvbSgpKjQwMFxuXG5cblx0Y2xlYXJDZWxscyA9ICgpIC0+XG5cdFx0ZmlsbGVkQ2VsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhaS1maWxsZWQnKVxuXHRcdFtdLmZvckVhY2guY2FsbCBmaWxsZWRDZWxscywgKGNlbGwsIGkpIC0+XG5cdFx0XHRjbGVhckNlbGwoY2VsbClcblxuXHRjbGVhckNlbGwgPSAoY2VsbCkgLT5cblx0XHRzZXRUaW1lb3V0ICgpIC0+XG5cdFx0XHRmaWxsZWQgPSBncmlkLmRhdGFzZXQudmlldytncmlkLmRhdGFzZXQuaW5kZXhcblx0XHRcdGlmICFncmlkLmRhdGFzZXQuaW5kZXggfHwgY2VsbC5kYXRhc2V0LmZpbGxlZCAhPSBmaWxsZWRcblx0XHRcdFx0Y2VsbC5zdHlsZSA9ICcnXG5cdFx0XHRcdGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWktZmlsbGVkJylcblx0XHQsIE1hdGgucmFuZG9tKCkqNDAwXG5cblxuXHRzZXR1cFBhbmVscyA9ICgpIC0+XG5cdFx0WydsZWZ0JywncmlnaHQnXS5mb3JFYWNoICh2aWV3LCBpKSAtPlxuXHRcdFx0aW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haS0nK3ZpZXcrJyAuYWktaW5mbycpXG5cdFx0XHRPYmplY3QuZW50cmllcyhjZWxsT2JqcykuZm9yRWFjaCAoY2VsbE9iaiwgaSkgLT5cblx0XHRcdFx0aW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRcdGluZm9Cb3guZGF0YXNldC5pbmRleCA9IGNlbGxPYmpbMF1cblx0XHRcdFx0aW5mb0JveC5jbGFzc0xpc3QuYWRkKCdhaS1pbmZvLWJveCcpXG5cdFx0XHRcdGluZm9Cb3guc3R5bGUuY29sb3IgPSBjZWxsT2JqWzFdLmNvbG9yXG5cdFx0XHRcdHByb3BzID0gY2VsbE9ialsxXVt2aWV3XVxuXHRcdFx0XHRwZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRcdFx0cGVyY2VudC5jbGFzc0xpc3QuYWRkKCdhaS1wZXJjZW50Jylcblx0XHRcdFx0cGVyY2VudC5pbm5lckhUTUwgPSBwcm9wcy5jb29yZHMubGVuZ3RoKzErJyUnXG5cdFx0XHRcdGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRcdFx0bGFiZWwuY2xhc3NMaXN0LmFkZCgnYWktbGFiZWwnKVxuXHRcdFx0XHRsYWJlbC5pbm5lckhUTUwgPSBwcm9wcy5sYWJlbFxuXHRcdFx0XHRpbmZvQm94LmlubmVySFRNTCArPSBwZXJjZW50Lm91dGVySFRNTCtsYWJlbC5vdXRlckhUTUxcblx0XHRcdFx0aWYgcHJvcHMuZGVmaW5lXG5cdFx0XHRcdFx0ZGVmaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRcdFx0XHRkZWZpbmUuY2xhc3NMaXN0LmFkZCgnYWktZGVmaW5lJylcblx0XHRcdFx0XHRkZWZpbmUuaW5uZXJIVE1MID0gcHJvcHMuZGVmaW5lXG5cdFx0XHRcdFx0aW5mb0JveC5hcHBlbmRDaGlsZChkZWZpbmUpXG5cdFx0XHRcdGluZm8uYXBwZW5kQ2hpbGQoaW5mb0JveClcblxuXHRcdFtdLmZvckVhY2guY2FsbCBwYW5lbFRpdGxlcywgKHBhbmVsVGl0bGUsIGkpIC0+XG5cdFx0XHRwYW5lbFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgY2xpY2tQYW5lbFxuXG5cdGNsaWNrUGFuZWwgPSAoKSAtPlxuXHRcdHBhbmVsID0gdGhpcy5wYXJlbnRFbGVtZW50XG5cdFx0aWYgcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhaS1hY3RpdmUnKVxuXHRcdFx0Y2xvc2VQYW5lbChwYW5lbClcblx0XHRlbHNlXG5cdFx0XHRvcGVuUGFuZWwocGFuZWwpXG5cblx0b3BlblBhbmVsID0gKHBhbmVsKSAtPlxuXHRcdHZpZXcgPSBwYW5lbC5kYXRhc2V0LnZpZXdcblx0XHRvdGhlclBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFpLXZpZXctcGFuZWw6bm90KC5haS0nK3ZpZXcrJyknKVxuXHRcdGlmIG90aGVyUGFuZWwubGVuZ3RoXG5cdFx0XHRvdGhlclBhbmVsWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FpLWFjdGl2ZScpXG5cdFx0XHRvdGhlclBhbmVsWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FpLWZsYXNoJylcblx0XHRcdGlmIG90aGVySW5mb0JveCA9IG90aGVyUGFuZWxbMF0ucXVlcnlTZWxlY3RvcignLmFpLWluZm8tYm94LmFpLWFjdGl2ZScpXG5cdFx0XHRcdG90aGVySW5mb0JveC5jbGFzc0xpc3QucmVtb3ZlKCdhaS1hY3RpdmUnKVxuXHRcdHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2FpLWFjdGl2ZScpXG5cdFx0Z3JpZC5kYXRhc2V0LnZpZXcgPSB2aWV3XG5cdFx0Y2xlYXJDZWxscygpXG5cdFx0ZmlsbENlbGxzKClcblxuXHRjbG9zZVBhbmVsID0gKHBhbmVsKSAtPlxuXHRcdGdyaWQuZGF0YXNldC52aWV3ID0gJydcblx0XHRncmlkLmRhdGFzZXQuaW5kZXggPSAnJ1xuXHRcdGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnYWktY2VsbC1hY3RpdmUnKVxuXHRcdHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FpLWFjdGl2ZScpXG5cdFx0cGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWktZmxhc2gnKVxuXHRcdGlmIGluZm9Cb3ggPSBwYW5lbC5xdWVyeVNlbGVjdG9yKCcuYWktaW5mby1ib3guYWktYWN0aXZlJylcblx0XHRcdGluZm9Cb3guY2xhc3NMaXN0LnJlbW92ZSgnYWktYWN0aXZlJylcblx0XHRjbGVhckNlbGxzKClcblxuXHQjIEV5ZSBtb3ZlbWVudCBhZGFwdGVkIGZyb20gaHR0cHM6Ly9jb2RlcGVuLmlvL3lncmlja3MvcGVuL1dwUXFOS1xuXHRQb2ludCA9ICh4LCB5KSAtPlxuXHRcdEB4ID0geFxuXHRcdEB5ID0geVxuXHRcdEBhZGQgPSAodykgLT5cblx0XHRcdEB4ICs9IHcueFxuXHRcdFx0QHkgKz0gdy55XG5cdFx0XHR0aGlzXG5cdFx0QG1pbiA9ICh3KSAtPlxuXHRcdFx0QHggLT0gdy54XG5cdFx0XHRAeSAtPSB3Lnlcblx0XHRcdHRoaXNcblx0XHRyZXR1cm5cblxuXHRnZXRSZWxhdGl2ZVBvaW50ID0gKG0sIGRlZywgZGlzdCkgLT5cblx0XHRuZXcgUG9pbnQobS54ICsgTWF0aC5jb3MoTWF0aC5yYWRpYW5zKGRlZykpICogZGlzdCwgbS55ICsgTWF0aC5zaW4oTWF0aC5yYWRpYW5zKGRlZykpICogZGlzdClcblxuXHR0cmFja0V5ZXMgPSAoZSkgLT5cblx0XHRzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLnNjcm9sbFRvcFxuXHRcdGlmIGUudHlwZSA9PSAncmVzaXplJ1xuXHRcdFx0Y2xpZW50WCA9IHdpbmRvdy5pbm5lcldpZHRoLzJcblx0XHRcdGNsaWVudFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMlxuXHRcdGVsc2Vcblx0XHRcdGNsaWVudFggPSBlLmNsaWVudFhcblx0XHRcdGNsaWVudFkgPSBlLmNsaWVudFkgKyBzY3JvbGxZXG5cdFx0Y3Vyc29yID0gbmV3IFBvaW50KGNsaWVudFgsIGNsaWVudFkpXG5cdFx0ZXllcy5mb3JFYWNoIChleWUsIGkpIC0+XG5cdFx0XHRleWVQb3NpdGlvbiA9IGdldFBvc2l0aW9uKGV5ZSlcblx0XHRcdGV5ZU1pZCA9IG5ldyBQb2ludChleWUub2Zmc2V0V2lkdGgvMiwgZXllLm9mZnNldFdpZHRoLzIpXG5cdFx0XHRwdXBpbCA9IGV5ZS5xdWVyeVNlbGVjdG9yKCcuYWktcHVwaWwnKVxuXHRcdFx0ZGVncmVlcyA9IE1hdGguZ2V0RGVnQmV0d2VlbihleWVQb3NpdGlvbiwgY3Vyc29yKVxuXHRcdFx0ZGlzdGFuY2UgPSBleWUub2Zmc2V0V2lkdGgvMiAtIHB1cGlsLm9mZnNldFdpZHRoXG5cdFx0XHRuZXdQdXBpbCA9IGdldFJlbGF0aXZlUG9pbnQoZXllTWlkLCBkZWdyZWVzLCBkaXN0YW5jZSlcblx0XHRcdG1pbnVzID0gbmV3IFBvaW50KHB1cGlsLm9mZnNldFdpZHRoLzIsIHB1cGlsLm9mZnNldFdpZHRoLzIpXG5cdFx0XHRuZXdQdXBpbC5taW4gbWludXNcblx0XHRcdHB1cGlsLnN0eWxlLnRvcCA9IG5ld1B1cGlsLnkgKyAncHgnXG5cdFx0XHRwdXBpbC5zdHlsZS5sZWZ0ID0gbmV3UHVwaWwueCArICdweCdcblxuXHRnZXRQb3NpdGlvbiA9IChlbCkgLT5cblx0XHR4ID0gMFxuXHRcdHkgPSAwXG5cdFx0d2hpbGUgZWwgYW5kICFpc05hTihlbC5vZmZzZXRMZWZ0KSBhbmQgIWlzTmFOKGVsLm9mZnNldFRvcClcblx0XHRcdHggKz0gZWwub2Zmc2V0TGVmdCAtIChlbC5zY3JvbGxMZWZ0KVxuXHRcdFx0eSArPSBlbC5vZmZzZXRUb3AgLSAoZWwuc2Nyb2xsVG9wKVxuXHRcdFx0ZWwgPSBlbC5vZmZzZXRQYXJlbnRcblx0XHRuZXcgUG9pbnQoeCwgeSlcblxuXHRNYXRoLnJhZGlhbnMgPSAoZGVncmVlcykgLT5cblx0XHRkZWdyZWVzICogTWF0aC5QSS8xODBcblxuXHRNYXRoLmRlZ3JlZXMgPSAocmFkaWFucykgLT5cblx0XHRyYWRpYW5zICogMTgwL01hdGguUElcblxuXHRNYXRoLmdldERlZ0JldHdlZW4gPSAoYSwgYikgLT5cblx0XHRkZWcgPSBNYXRoLmRlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSAoYi54KSwgYS55IC0gKGIueSkpKSAqIC0xIC0gOTBcblx0XHRpZiBkZWcgPCAwIHRoZW4gMzYwICsgZGVnIGVsc2UgZGVnXG5cblx0IyByZXNpemVCYXNlVGVzdCA9ICgpIC0+XG5cdCMgXHRmb250U2l6ZSA9IHdpbmRvdy5pbm5lcldpZHRoLzYwXG5cdCMgXHRjb25zb2xlLmxvZyBmb250U2l6ZVxuXHQjIFx0cm9vdC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplKydweCdcblx0IyBcdGlmIGV5ZXMubGVuZ3RoXG5cdCMgXHRcdHRyYWNrRXllcygpXG5cblx0IyByZXNpemVCYXNlVGVzdCgpXG5cdFxuXHRzZXR1cFBhbmVscygpXG5cdHNldHVwR3JpZCgpIl19
