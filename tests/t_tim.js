const fs=require('fs');class DCLogic{constructor(p){this.props=p;this.state=this.state||{};}setState(o){this.state=Object.assign({},this.state,o);}}
global.setTimeout=()=>{};
const bo=x=>String(x).normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d').toLowerCase();
for(const f of process.argv.slice(2)){
  const src=[...fs.readFileSync(f,'utf8').matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].pop()[1];const C=eval(src+';Component');
  const c=new C({}); let v=c.renderVals();
  const tables=Object.keys(v).filter(k=>(/^cx[A-Z]/.test(k)||k==='cots')&&Array.isArray(v[k]));
  const out=[];
  for(const tk of tables){
    const rowsKey = tk==='cots' ? (v.ds?'ds':'hd') : tk[2].toLowerCase()+tk.slice(3);
    v=c.renderVals(); const col=v[tk].find(x=>x.coNut!==false && x.giaTri && x.giaTri.length>2); if(!col){out.push(tk+':-');continue;}
    const ten=col.ten; const n0=(v[rowsKey]||[]).length;
    col.bam(); v=c.renderVals(); let cc=v[tk].find(x=>x.ten===ten);
    const target=cc.giaTri[1].ten; const q=target.slice(0,Math.min(4,target.length));
    cc.doiTim({target:{value:q.toUpperCase()}}); v=c.renderVals(); cc=v[tk].find(x=>x.ten===ten);
    const allMatch=cc.giaTri.every(g=>bo(g.ten).includes(bo(q))); const nHien=cc.giaTri.length;
    cc.dong(); v=c.renderVals(); const rows=v[rowsKey]||[]; cc=v[tk].find(x=>x.ten===ten);
    // rows must all have value matching
    out.push(`${tk}[${ten}] tim "${q}" -> ${nHien} gia tri, khop=${allMatch}; dong ${n0}->${rows.length}; hop dong=${!cc.mo}; o tim xoa=${cc.tim===''}`);
    cc.xoaLoc(); v=c.renderVals(); if((v[rowsKey]||[]).length!==n0) out.push('  XOA LOC KHONG TRA VE '+n0);
    // khong khop
    v=c.renderVals(); cc=v[tk].find(x=>x.ten===ten); cc.bam(); v=c.renderVals(); cc=v[tk].find(x=>x.ten===ten); cc.doiTim({target:{value:'zzzzqq'}}); v=c.renderVals(); cc=v[tk].find(x=>x.ten===ten);
    if(!cc.khongKhop) out.push('  thieu thong bao khong khop'); cc.dong(); v=c.renderVals(); c.state.lx={}; c.state.loc={}; c.state.txl={};
  }
  console.log(f.split('/').pop()); out.forEach(x=>console.log('  '+x));
}
