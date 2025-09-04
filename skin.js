// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: button.ggsk
// Generated 2025-09-04T23:50:39

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 142px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 389px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_6=document.createElement('div');
		els=me._button_6__img=document.createElement('img');
		els.className='ggskin ggskin_button_6';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_6.onclick=function (e) {
			player.changeTiltLog(-1,true);
		}
		me._button_6.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_6);
		el=me._button_16=document.createElement('div');
		els=me._button_16__img=document.createElement('img');
		els.className='ggskin ggskin_button_16';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 16";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_16.onclick=function (e) {
			player.changePanLog(1,true);
		}
		me._button_16.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_16);
		el=me._button_25=document.createElement('div');
		els=me._button_25__img=document.createElement('img');
		els.className='ggskin ggskin_button_25';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 25";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_25.onclick=function (e) {
			player.changePanLog(-1,true);
		}
		me._button_25.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_25);
		el=me._button_26=document.createElement('div');
		els=me._button_26__img=document.createElement('img');
		els.className='ggskin ggskin_button_26';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 26";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 349px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_26.onclick=function (e) {
			me._button_26.style[domTransition]='none';
			me._button_26.style.visibility='hidden';
			me._button_26.ggVisible=false;
			me._button_27.style[domTransition]='none';
			me._button_27.style.visibility=(Number(me._button_27.style.opacity)>0||!me._button_27.style.opacity)?'inherit':'hidden';
			me._button_27.ggVisible=true;
			player.startAutorotate("0.2");
		}
		me._button_26.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_26);
		el=me._button_27=document.createElement('div');
		els=me._button_27__img=document.createElement('img');
		els.className='ggskin ggskin_button_27';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 27";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 350px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_27.onclick=function (e) {
			me._button_27.style[domTransition]='none';
			me._button_27.style.visibility='hidden';
			me._button_27.ggVisible=false;
			me._button_26.style[domTransition]='none';
			me._button_26.style.visibility=(Number(me._button_26.style.opacity)>0||!me._button_26.style.opacity)?'inherit':'hidden';
			me._button_26.ggVisible=true;
			player.stopAutorotate();
		}
		me._button_27.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_27);
		el=me._button_28=document.createElement('div');
		els=me._button_28__img=document.createElement('img');
		els.className='ggskin ggskin_button_28';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 28";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 236px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_28.onclick=function (e) {
			player.changeFovLog(1,true);
		}
		me._button_28.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_28);
		el=me._button_31=document.createElement('div');
		els=me._button_31__img=document.createElement('img');
		els.className='ggskin ggskin_button_31';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAItUlEQVRYhcWYa0wT2xbH/zPtDI+WUkDwKBRCQUsQtEo1QanG8DBaRZJzFaJGjH7wHMGLoiTGoKnyiA8INJ4P+Pigx0jUXHzUEM3lKiIvtYDaqwJCjNpitVIUbIttnc79cOSKSIV6fPw/7r3XWr9Ze8/M2otgWRbuSqlUBopEoozg4ODY0NDQAIlEQrMsCy6Xi+H+Ojo67DqdzqTT6e4bDIbT+fn5RndjEe4AqlSqVKlU+uu8efP8X7x4Aa1Wi+bmZjQ0NKCzsxMmkwleXl4QCASYNm0aFixYgPj4eEyfPh2+vr5obGzsa2trq8rJyVF/U8DS0lL5ggULsqZOncqrr6/HoUOHUFdXh3fv3o0riKenJxYvXozs7GzMnz8fd+7csdTV1f2xffv2hr8NqF'+
			'arVQqFQlxbW4tt27ZBq9WOC8qVZsyYgeLiYiQlJeHKlSuPU1NTc74KUKlUBq5cubJCKBTSu3fvxokTJ/D+/fu/BTdcq1evRkVFBXQ6nf3MmTO/KZXKV+MGLCkpSVAoFFtNJhOdnZ2Ne/fufTOw4YqMjMT58+dBkqS9urq6LC8v77MtJ0cOKJXKwCVLlmw1GAx0Wlrad4MDgO7ubixfvhz9/f30smXLthYWFgaNXPNZBtvb26tMJhOdkZGBnp6e7wY3XN7e3tBqtbDZbPbo6Ohfh899kkG1Wq0Si8X0qlWrfhgcAFitVqSnp8PHx4dWq9WqUQFLSkoSUlJSxAqFAjqd7ofBDam1tRVFRUVQKBTikpKShKHx/2+xRqM5/fTpU96KFSt+ONyQeDwerl69Ci6Xa4mLi8sAPmRQpVKlxsTE8JRK5Vc5JkmSmD9/vu+RI0ck'+
			'x44di0pKShJSFEW468disSArKwuxsbE8lUqVCnzIYH19/YnBwUH/RYsWuQ3n4eFBLFq0yK+0tDRm8uTJ3gBgMBisO3bseHjp0iWTzWZz+2d/8+ZN2O32PrlcnskBELhmzZqMnTt34uHDh245IkmSSElJEe7bty86MjJSQNM0h6Io0tfXl5ZKpQK9Xm9ub28fdBfQarUiJyfHa8+ePf8hRSJRhtFoxOXLl91yQhAE4uLieAUFBZLIyEhfkiSJ4XPh4eE+RUVF0enp6RO4XK5b233hwgX09fVBJBJlkCKRKLalpQUWi8UtOKlUyistLY2aNm2aP5fLJViWBcMwLMMwLMuy4HA4RHh4uM/u3buj5s6d6+MOoNVqhVarRXBwcCwZEhIS0NAwZlHxicLDwz327t0bKZPJAoey43A4nC0tLb1NTU0vHQ6HkyAIcDgcIiIiwq'+
			'e4uNhtyJaWFoSGhgaQUVFRdGtr67gNQ0NDPQoKCiIXLlw4iaZpEgAYhmE7Ojr6t2zZ8jA3N7ddq9X2ORwOFgC4XC4ZFxcXsG/fPklERITneOPcvXsXEonkrwD3798fl9HEiROp/Pz88NTU1BBPT08OQRBwOp0wGAyW3NzcBxqNxtzW1mbJy8tr7+7u7mcYhiUIAhRFkTKZbMLBgwenBgUFUeOJNVQDkADQ29s7poG/vz9369atohUrVoi8vLy4BEGAYRjo9XpzXl7eg9ra2n6n08myLIsbN24MbN68+f6TJ0/eMgwDgiBA0zQnMTFxUm5urkgoFHLHivf8+fOPgN7e3l9cLBAIOFlZWcHr168X8/l8GgAYhsGbN2/e7dmzp12tVptG2jQ1NQ0UFxd3Go3GQYZh8CEOd+PGjRG7du0K4/P5nC/F5PF4HwEFAoHLhXw+'+
			'n7Nhw4ZfsrOzI/38/DyGtrW/v9929OjRx5WVla9G+xjbbDa2srLyVUVFRffr16/fsSwLgiDA5/PpdevWiQsLC8O/BCkSiT4CSiQSl4DTp0/3zszMDBMKhR4EQYBlWZjNZvuBAwc6i4uLnw69DKPJ4XCw5eXlPfv37+8cGBiwD0HyeDwqOTn5l/j4eJdvdkRExF+AHR0d9sTERJeAU6ZM8RIIBBTDMKzT6WStVqvj/Pnz+sOHDz+3WCxOl4YfZDabmSNHjhiOHz/+2GKxOBiGYR0Oh5MkSURFRbk8WzKZDJ2dnXauXq83yeXySa4Wvnz50tHe3t5PURTJsiwaGhqMeXl5XQMDA8xYcMMhCwoKnk6YMIGWy+VBDofDqdFo+jo6OqyubGbOnIlnz56ZiGPHjv1z5cqVya7OYVBQEJWUlCSMiYnhP3jwwFxTU/PGaDQ6xg'+
			's30ldycrIwLCzMS6PRDDQ3N781m82fPaivry8ePXqEixcv/ptrMBhO8/n85OTkZNTU1Hzm1Gg0OiorK18BGPXW5Y6MRqPj1KlTY/pRKBQICAhAT0/P6aFy60+GYfySkpIw9En4mbp16xZsNlufXC7PJAGgra3tXwkJCZBKpT+bDfHx8YiNjUVbW1sVMKLk7+3t5S1ZsuSnwVEUhZaWFtjtdotMJvtY8gNAXV3dHykpKfiZd5KcnBzExMTg+vXrfwyNfXIvVqvVqri4OPHChQvR1dX1Q+Fmz56N2tpaXL169ZN+zagXd4qi6MTERDx79uyHwIWFhUGtVoPL5X754g4AVVVVv9vtdvvJkycxefLk7w4nFotRXV0NiqLsZ8+e/W3k/GeA+fn5RrVaXRYYGGhvbGyETCb7bnBSqRRVVVUgCMJeXV1dNlqH6zNAANixY0dD'+
			'VVXV74ODg/Zz585h7dq1oGn6m8Jt2rQJt2/fhoeHh72ysnKjq2bmmA3MCxcuqJYuXSq+fv06du7cidbWVjidY9YILhUfHw+VSoVZs2ahurp6zAbmqBkcrrS0tJzy8vL9QqHQ0tzcjObmZqSlpbkF5efnh8zMTGg0Gly7dg0ALGVlZfvHggO+ook+a9asf8ybN8/v7du36OrqQmNjI+rr66HVamE0GuHp6QmRSITo6GjIZDLMmTMHEokEPj4+aGpq+j5N9JEqLCwMmjRpUrpIJIoNCQkJkEgkox7Qzs5Ou16vN+l0uv/qdLrTrtq8X9L/AHXJ3pdX6NOTAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 31";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_31.onclick=function (e) {
			player.changeTiltLog(1,true);
		}
		me._button_31.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_31);
		el=me._button_10=document.createElement('div');
		els=me._button_10__img=document.createElement('img');
		els.className='ggskin ggskin_button_10';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 181px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_10.onclick=function (e) {
			player.changeFovLog(-1,true);
		}
		me._button_10.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_10);
		me.divSkin.appendChild(me._container_1);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs='data:image/png;base64,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'+
			'TkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			player.exitFullscreen();
			me._button_2.style[domTransition]='none';
			me._button_2.style.visibility='hidden';
			me._button_2.ggVisible=false;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility=(Number(me._button_1.style.opacity)>0||!me._button_1.style.opacity)?'inherit':'hidden';
			me._button_1.ggVisible=true;
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._button_2);
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,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'+
			'9/Kg7ytHqUcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			player.enterFullscreen();
			me._button_2.style[domTransition]='none';
			me._button_2.style.visibility=(Number(me._button_2.style.opacity)>0||!me._button_2.style.opacity)?'inherit':'hidden';
			me._button_2.ggVisible=true;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='hidden';
			me._button_1.ggVisible=false;
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._button_1);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAJxElEQVRYhbWZbUxTaRbHz719hZYCMkUrFLM4S7uksC1oB9puhhlfsgGCpvUtMNHwQaPNZgqJyRozcfqhiToiBENmjV8mGZxYkBrTKmgWBEVaXGxZBYGixZ2W6qy8CAVa2su9dz9Iu1AKVEf/SZOb23Pu8+tzz3Oec54iJEnC+0qn0yXzeLyDfD4/KzU1NUkoFNIj2Q0NDQVGR0cnXC5Xn8vl0mu12rH3HQt5H8BLly7tkUgkSplMtmF6ehp6e3uhq6sL2tvbYXh4GDweD8zPzwOXy4WsrCzIzc0FhUIBEokEkpOTwWw2T9psNoNGozF+VMCqqipFQUHB38RiMau9vR2+//57sFgsUf8wDocDRUVFcPToUcjPz4e+vr65+/fv1508efLh7wY0Go21hY'+
			'WF6UajEc6cOQODg4NAEETUcOESi8Wg0+lg9+7d0NLSMlJSUqL5IECdTpesUqn+wWAw6BqNBm7duvXBUJGkVCrh2rVr4HA4Ag0NDcdXi8+IgBcuXFAUFRVVYhhGVyqVMDIy8lHhgsrIyID6+npgs9mB5ubmmkivHA2/odPpkhfheAaDIYVGo8V8EjoAGB4ehv3794PX66UXFRVVarVabrjNihkcHBw0EARBHxsby5HL5Ty73T5VVFT02Ol0+j8VKJ/Ph6amJmCz2YHMzEzVqoA3b96sFYlE6Xv27IF9+/ZtOX36dCaDwaC43W7vkSNHrG1tbdNLnb/55ptkhUKRmJmZGcdkMilMJpNCo9FQOp2OUqlUFEVRhEqlIiiKIhQKBZ2dnQ0MDAx4Kisrh+x2u2/ps7Zv3w53796Fzs7O5QuHJEkgSRKqqqr+gmGYqbi42AQA'+
			'JgAwfffdd0+8Xu8CjuOE0+mcUSqVZgRBTABg+u233+b8fj9OEAQZ7WdhYYEYGxvzffHFFx3BMZZ+KisrTTiOmy5cuKAIcoUAe3p69Ddu3FjhtH//fsvo6OgsQRBkIBAg1Gr144yMjH9iGEYQBEGSJBk1IEEQpM/nWzh27NjjSIA0Gs3U3d1t6unp0Qe5qADvdgi1Ws0qLS1dER/Xr18ff/v2ra2hoUGamJjIOHv2bHZBQYGbQqEgCIIASZLw5s0bL0mSEIT2+/3EwsICgWEYieM4EQgESJFIlMBkMikIgkBSUhItUixiGAaVlZXQ2trKqq2tLdFoNEYqAIBEIlF1dHTAixcvIgZxa2vrtEwme9jY2CgRiUSJKpVqSxDO7/fjmzZtuhfRcYnm5ub+iqIogqIowmAwVmSPoCwWC1itVhCLxSoAMKI6nS45Pz8/8dy5c7'+
			'DWrmK3231lZWX/tlqt4yiKIgAACIKA3+9fWA+Ow+FQ6HQ6BVnU8PDw3Fr2ly9fBoVCsUGr1XJRHo93cHJyEtra2tYbB/r7+71SqfTR7OwsFrxHo9EoAoFgzVwpFApjUPTdpJEkST569GhmLfvbt2/D5OQk8Pn8Qyifz8969uzZunBLheN4aDOOjY2lNjU15aSlpTFWs5fL5fEIgiCLvuR6OXV6ehqGhoYgJSUlC01NTU26d2/dEFomJpNJDa4yHMdJkUiUaDab5Tt27IiPZJ+bm5sQvPb7/QSGYeuWUDabDdLS0pJQgUBAf/DgQdRwi8k3FOQGg+FXn8+H83i8mJ9++kmiVCqTFicrpK1bt7KD1z6fD4MoZLFYQCAQ0FEAgOfPn0cNKBQKmcFFAgBw+vTpF0eOHOl5/fq1NzU1la3X6/NOnDjBW+qzefPmUIxOTEwE'+
			'ohnH4XD8Pw96PJ6oAeVyeeg14jhOOhyOeYfDMR+eK5OSkug//PCD0+/3k3FxcaG89+bNG1/kJy+X2+0GKpX6rprx+6OvA2QyWWLwGsOw0GIJ5sq+vr5JNptNPXPmjOjKlSt/YjKZKIPBoATtRkZG1kwxQeE4DiRJvgPkcldUOatKKBRygtc+n29ZDgzLlVBWVvaHn3/+OZNGo4Vitre3N6rXFWRCAQCysrKiBuTxeKF4mpqaWjH1wVx5584dNwCASqXasnRRWSyW6XCfSJJKpe8A7XZ7IC8vL2rA+Pj4UDy53e5V4+nw4cP9jY2NvxIEQSIIAgiCAEEQZH9/vzeacWQyGQwNDQXQ0dHRCblcvqZxQUFB/JUrVwRms1nK4XDowTTy7NmzVWcDwzCytbV1zO12h4BQFAWZTBYXDeC2bdvA5XJNoC6Xqy87OxtYLFZEw8'+
			'LCwkS9Xp9bXl7+eV5eXvLSfdhut68a8NXV1X+sq6uTpKWlhXIggiDI9evXpQcPHuSG58qlio2NBYFAAC6Xqx91uVx6LpcLX3/9dUTj0tLSzcnJybFUKhUJf2hMTAwlohMAHDhwYEtMTAw13CchIYFRX18vDc+VYb7AYDDA5XJdQ7Va7ZjZbJ6sqKhY9RdFEkmSMDU1tequEKkywnGc9Hq9C1QqFTl//vyfq6urP2exWMtKLxqNBmq1Grq6uia1Wu0YCgBgs9kMUqkUxGLxioc+ffrUMzMzE1isnmGxMCVfvnzpcTqd86sBPn/+fHp+fh5fumfPzMxgZWVl/+rr65uMjY2lfPvtt4LLly8Ll/opFArIyckBm81mAFjSNPX09Og9Hg9r586dKwbbunUr8/Dhw5vy8vI2oCgKvb2907/88svrJ0+erLkiCwsLE4uLi7kb'+
			'N25kulwub2Nj43+7u7tn09PTGfX19dlSqZRLkiTcuHHDqVarB8fHxxc6OzuBwWDMbd++/dAywKqqKkVFRcXfy8vL4erVq2uN+9HU0tIi2bVr12YAgLq6OvvAwMCLH3/8EWpqas4Hm/hlbafRaKz96quv0vPz8+F9a8QP0WeffUatqanJ2LFjx6Zbt26NlJaW/qetrW1Z27micR8YGDB4PB66SqWCV69efXJIAAChUAjNzc3g9/sDQqFwWeO+onlpbGw8zuFwAgaDAfh8/ieH43K5cPXqVfD5fAG9Xn88/PsVgFqtdqy5ubkmPj4+0NTUBNnZ2Z8MLj8/H54+fQosFitgNBprIp1wRWz/Tp48+bChoeE4m80OdHV1gVqt/qhgHA4HKioqwGAwwNu3bwNNTU0nTp06FfEwM6oDzOLi4vTu7m7QaDTw+PHj3wX35Zdfws'+
			'WLF0EsFoPJZBrZu3fvmgeYqzbQQZWUlGiqq6vP0+n0uY6ODujs7IR9+/ZBXFxUez4AALBYLCgvL4fe3t5geztXXV19fj04gPc8RK+trS3JyclRyWSyDePj4zAwMABWqxWsVis4HA4YHR0Fn88HqampIBaLQSKRwLZt20AkEkFCQgJ0dXV9mkP0cGm1Wi6fzz+UkpKSlZaWliQQCCL+DWG32wNOp3PC7XZ/8N8Q/wOf3/wbswpqrwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_3.onclick=function (e) {
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='hidden';
			me._button_3.ggVisible=false;
			me._button_4.style[domTransition]='none';
			me._button_4.style.visibility=(Number(me._button_4.style.opacity)>0||!me._button_4.style.opacity)?'inherit':'hidden';
			me._button_4.ggVisible=true;
				player.pauseSound("_background");
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._button_3);
		el=me._button_4=document.createElement('div');
		els=me._button_4__img=document.createElement('img');
		els.className='ggskin ggskin_button_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_4.onclick=function (e) {
			me._button_4.style[domTransition]='none';
			me._button_4.style.visibility='hidden';
			me._button_4.ggVisible=false;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility=(Number(me._button_3.style.opacity)>0||!me._button_3.style.opacity)?'inherit':'hidden';
			me._button_3.ggVisible=true;
				player.playSound("_background","1");
		}
		me._button_4.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._button_4);
		me.divSkin.appendChild(me._container_2);
		me._button_27.style[domTransition]='none';
		me._button_27.style.visibility='hidden';
		me._button_27.ggVisible=false;
		me._button_2.style[domTransition]='none';
		me._button_2.style.visibility='hidden';
		me._button_2.ggVisible=false;
		me._button_4.style[domTransition]='none';
		me._button_4.style.visibility='hidden';
		me._button_4.ggVisible=false;
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};