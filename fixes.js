document.querySelector('#robotForm').addEventListener('submit',()=>setTimeout(()=>{
  if(!plan)return;
  plan.parts=plan.parts.map(item=>item.length===3?[item[0].startsWith('Emergency')?'Safety':'Assembly',...item]:item);
  plan.total=plan.parts.reduce((sum,item)=>sum+item[2],0);
},0));
