// Kiem logic To khai GTGT tren moi trang thai
const fs=require('fs');class DCLogic{constructor(p){this.props=p;this.state=this.state||{};}setState(o){this.state=Object.assign({},this.state,o);}}
const f=process.argv[2]||'design/ToKhai.dc.html';
const src=[...fs.readFileSync(f,'utf8').matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].pop()[1];
const C=eval(src+';Component');
const num=t=>{ if(t==null||t===''||t==='—') return null; const neg=/^[−-]/.test(t); const n=Number(String(t).replace(/[^0-9]/g,'')); return neg?-n:n; };
const errs=[]; const bad=(ctx,msg)=>errs.push(ctx+' :: '+msg);
const QM={q1:[1,2,3],q2:[4,5,6],q3:[7,8,9],q4:[10,11,12]}; for(let i=1;i<=12;i++) QM['m'+i]=[i];
const KL=nam=>{const c=new C({}); c.state=Object.assign({},c.state,{nam}); return c.renderVals().kys.map(k=>k.k).filter(k=>k!=='nam');};
let n=0;
for(const nam of ['2026','2025','2024']) for(const ky of KL(nam)){
  const c0=new C({}); c0.state=Object.assign({},c0.state,{nam,ky,lan:null}); const v0=c0.renderVals();
  const lans=v0.lanPills.map((p,i)=>i);
  const cases=[]; v0.lanPills.forEach((p,i)=>cases.push({lanIdx:i,ss:false})); if(v0.coSoSanhLan) cases.push({lanIdx:v0.lanPills.length-1,ss:true});
  if(!v0.lanPills.length) cases.push({lanIdx:-1,ss:false});
  for(const cs of cases) for(const tab of ['ban','mua','ngoai','tk']){
    n++;
    const c=new C({}); c.state=Object.assign({},c.state,{nam,ky,tab,lan:null});
    let v=c.renderVals();
    if(cs.lanIdx>=0){ v.lanPills[cs.lanIdx].pick(); v=c.renderVals(); }
    if(cs.ss){ v.batSoSanh(); v=c.renderVals(); }
    const ctx=`${nam} ${ky} lan${cs.lanIdx}${cs.ss?' SS':''} ${tab}`;
    const lanTen=cs.lanIdx>=0?v.lanPills[cs.lanIdx].ten:'(rong)';
    const dangLam=lanTen==='Bản đang làm', tam=lanTen==='Số liệu tạm', rong=cs.lanIdx<0, khoa=!dangLam&&!rong&&!tam;
    if(tam){ if(v.nutChinh!=='Chưa hết kỳ') bad(ctx,'ky dang dien ra nut '+v.nutChinh); if(tab==='ngoai'&&!cs.ss&&!v.coThemCt) bad(ctx,'ky dang dien ra khong them duoc chung tu'); }
    // 1. KPI = [34],[35],[25],[40] cua bang chi tieu lan dang xem
    if(!rong){
      const cot = cs.ss ? v.ssDong[0].o.length-1 : null;
      const lay = ma => { const d=v.ssDong.find(x=>x.ma===ma); return num(d.o[cs.ss?cot:cs.lanIdx].v); };
      const k={dt:num(v.kpi.dt),ra:num(v.kpi.ra),vao:num(v.kpi.vao),nop:num(v.kpi.nop)};
      if(Math.abs(k.dt-lay('[34]'))>1) bad(ctx,'KPI [34] '+k.dt+' != bang '+lay('[34]'));
      if(Math.abs(k.ra-lay('[35]'))>1) bad(ctx,'KPI [35] != bang');
      if(Math.abs(k.vao-lay('[25]'))>1) bad(ctx,'KPI [25] != bang');
      if(Math.abs(k.nop-lay('[40]'))>1) bad(ctx,'KPI [40] != bang');
      if(Math.abs(k.nop-(k.ra-k.vao))>1) bad(ctx,'[40] != [35]-[25]');
      // bang chi tieu khi xem 1 lan (ct) khop KPI
      if(!cs.ss){ const g=ma=>v.ct.find(x=>x.ma.indexOf(ma)>=0); 
        if(!g('[40]')||Math.abs(num(g('[40]').thue)-k.nop)>1) bad(ctx,'ct [40] khac KPI');
        if(!g('[34]')||Math.abs(num(g('[34]').gt)-k.dt)>1) bad(ctx,'ct [34] khac KPI'); }
      // chenh lech so sanh = tong HD bo sung
      if(v.ssDong.length && v.ssDong[0].o.length>1){
        const d=ma=>{const r=v.ssDong.find(x=>x.ma===ma); return num(r.o[r.o.length-1].v)-num(r.o[0].v);};
        const c2=new C({}); c2.state=Object.assign({},c2.state,{nam,ky,tab:'ban',lan:null,ss:true}); const vb=c2.renderVals();
        const st=vb.hd.reduce((a,r)=>a+num(r.tien),0), sth=vb.hd.reduce((a,r)=>a+num(r.thue),0);
        const c3=new C({}); c3.state=Object.assign({},c3.state,{nam,ky,tab:'mua',lan:null,ss:true}); const vm=c3.renderVals();
        const mt=vm.hd.reduce((a,r)=>a+num(r.thue),0), mtien=vm.hd.reduce((a,r)=>a+num(r.tien),0);
        if(d('[34]')!==st) bad(ctx,'chenh [34] '+d('[34]')+' != tong tien HD ban ra thay doi '+st);
        if(d('[35]')!==sth) bad(ctx,'chenh [35] != tong thue HD ban ra thay doi');
        if(Math.abs(d('[24]')-mt)>1) bad(ctx,'chenh [24] '+d('[24]')+' != thue mua vao thay doi '+mt);
        if(Math.abs(d('[23]')-mtien)>1) bad(ctx,'chenh [23] != tien mua vao thay doi');
      }
    } else { if(v.kpi.dt!=='—') bad(ctx,'ky rong ma co KPI'); }
    // 2. dong HD: ngay trong quy, thue = tien*8% (tru dong dac biet)
    if(tab==='ban'||tab==='mua'){
      if(rong && v.hd.length) bad(ctx,'ky rong ma co HD');
      for(const r of v.hd){
        const [dd,mm,yy]=r.ngay.split('/').map(Number);
        if(yy!==Number(nam)) bad(ctx,r.so+' nam '+yy);
        if(!QM[ky].includes(mm)) bad(ctx,r.so+' ngay '+r.ngay+' ngoai '+ky);
        if(/tháng \d+/.test(r.mh) && !QM[ky].includes(Number(r.mh.match(/tháng (\d+)/)[1]))) bad(ctx,r.so+' mo ta sai thang: '+r.mh);
        if(/quý \d/.test(r.mh) && (ky[0]==='m' || r.mh.match(/quý (\d)/)[1]!==ky[1])) bad(ctx,r.so+' mo ta sai quy');
        const t=num(r.tien), th=num(r.thue);
        const dacBiet=/Dùng chung · khấu trừ|Ô tô|không khấu trừ|tách khỏi|Ngoại tệ/i.test(r.k)||/Không đủ ĐK/.test(r.nhom);
        if(!r.so.startsWith('C'+nam.slice(2)+'T')) bad(ctx,'ky hieu '+r.so+' khong dung nam');
        if(!dacBiet && Math.abs(Math.round(t*0.08)-th)>1) bad(ctx,r.so+' thue '+th+' != 8% x '+t+' ('+r.k+')');
        // ky da khoa: khong con trang thai cho xu ly
        if(khoa && /cần|Chưa có mã|Thiếu mã|chờ|Tạm loại|^MST ngừng hoạt động$|Nghi sai|chưa thấy/i.test(r.k+' '+r.ma+' '+r.nhom)) bad(ctx,'ky da khoa con trang thai cho xu ly: '+r.so+' · '+r.k);
        if(cs.ss && !/Bổ sung|Bỏ ở|Sửa ở/.test(r.k)) bad(ctx,'so sanh hien HD khong thay doi '+r.so);
        if(!cs.ss && lanTen==='Lần đầu' && /Bổ sung/.test(r.k)) bad(ctx,'lan dau hien HD bo sung '+r.so);
      }
      if(!rong && !khoa && !cs.ss && !v.hd.length) bad(ctx,'khong co HD');
    }
    if(tab==='ngoai'){ for(const r of v.ngoai){ const mm=Number(r.ngay.split('/')[1]); if(!QM[ky].includes(mm)) bad(ctx,'chung tu ngoai ngoai quy '+r.ngay);} if(cs.ss&&v.ngoai.length) bad(ctx,'so sanh van hien chung tu ngoai');
      if(khoa && v.coThemCt) bad(ctx,'ky da khoa van cho them chung tu'); if(dangLam && !v.coThemCt) bad(ctx,'ban dang lam khong them duoc chung tu'); }
    // 3. khoi kiem tra / lech / tao ma chi o ban dang lam
    if(khoa && v.coKt) bad(ctx,'ky da khoa van hien khoi HD can kiem tra');
    if(khoa && v.coTaoHet && tab==='mua') bad(ctx,'ky da khoa van hien Tao ma nhanh');
    if(khoa && v.coKiemTra) bad(ctx,'ky da khoa van kiem lech');
    // 4. nut chinh
    if(dangLam && !/^Khóa sổ/.test(v.nutChinh)) bad(ctx,'nut chinh '+v.nutChinh);
    if(khoa && v.nutChinh!=='+ Lập khai bổ sung lần '+(v.lanPills.length)) bad(ctx,'nut chinh '+v.nutChinh);
    // 5. o quy: chi quy dang lam co 'con N lech'
    v.kys.forEach(q=>{ if(q.coLech && !/chưa khóa|Đang làm/.test(q.tt)) bad(ctx,'o '+q.ten+' da nop ma bao lech'); });
    // 6. xuat: ky trong bang ke va ngay
    if(v.xemDong) {}
  }
}
// 7. Xuat: TK nam khop so tung quy (lan moi nhat)
for(const nam of ['2026','2025']){
  const c=new C({}); c.state=Object.assign({},c.state,{nam,ky:'q1',mau:'tk'}); const v=c.renderVals();
  const r40=v.xemDong.find(r=>r[0]==='[40]'), r34=v.xemDong.find(r=>r[0]==='[34]');
  ['q1','q2','q3','q4'].forEach((q,i)=>{ const c2=new C({}); c2.state=Object.assign({},c2.state,{nam,ky:q,lan:null,tab:'tk'}); const v2=c2.renderVals();
    const e34=v2.kpi.dt==='—'?'':v2.kpi.dt, e40=v2.kpi.dt==='—'?'':v2.kpi.nop;
    if(r34[2+i]!==e34) errs.push(`xuat TK nam ${nam} ${q} [34] ${r34[2+i]} != ${e34}`);
    if(r40[2+i]!==e40) errs.push(`xuat TK nam ${nam} ${q} [40] ${r40[2+i]} != ${e40}`); });
  for(const mau of ['bk','ct']) for(const ky of ['q2','q3']){ const c3=new C({}); c3.state=Object.assign({},c3.state,{nam,ky,mau}); const v3=c3.renderVals();
    v3.xemDong.forEach(r=>r.forEach(x=>{ const m=String(x).match(/^\d\d\/(\d\d)\/(\d{4})$/); if(m && (!QM[ky].includes(+m[1])||m[2]!==nam)) errs.push(`xuat ${mau} ${nam} ${ky} ngay ${x}`); if(/^Q\d\/\d{4}$/.test(x) && x!=='Q'+ky[1]+'/'+nam) errs.push(`xuat ${mau} ${nam} ${ky} ky ${x}`);})); }
}
const u=[...new Set(errs)];
console.log('trang thai da chay:',n,' | loi:',u.length); u.slice(0,+(process.argv[3]||80)).forEach(e=>console.log(' -',e));
// 8. Ca nam: so = tong so lieu sau cung cua tung quy
for(const nam of ['2026','2025','2024']){
  const c=new C({}); c.state=Object.assign({},c.state,{nam,ky:'nam',tab:'tk'}); const v=c.renderVals();
  let s={dt:0,ra:0,vao:0,nop:0}, nHdBan=0, nHdMua=0, nNg=0;
  for(const q of KL(nam)){ for(const tab of ['ban','mua','ngoai']){ const c2=new C({}); c2.state=Object.assign({},c2.state,{nam,ky:q,lan:null,tab}); const w=c2.renderVals(); if(w.kpi.dt==='—') continue;
    if(tab==='ban'){ for(const k in s) s[k]+=num(w.kpi[k]); nHdBan+=w.hd.length;} if(tab==='mua') nHdMua+=w.hd.length; if(tab==='ngoai') nNg+=w.ngoai.length; } }
  for(const k in s) if(Math.abs(num(v.kpi[k])-s[k])>2) errs.push(`ca nam ${nam} KPI ${k} ${v.kpi[k]} != ${s[k]}`);
  const r40=v.ct.find(x=>x.thMa==='[40]'), r34=v.ct.find(x=>x.gtMa==='[34]');
  if(Math.abs(num(r40.thue)-s.nop)>2) errs.push(`ca nam ${nam} [40] ${r40.thue} != ${s.nop}`);
  if(Math.abs(num(r34.gt)-s.dt)>2) errs.push(`ca nam ${nam} [34] != tong`);
  for(const [tab,n] of [['ban',nHdBan],['mua',nHdMua],['ngoai',nNg]]){ const c3=new C({}); c3.state=Object.assign({},c3.state,{nam,ky:'nam',tab}); const w=c3.renderVals(); const len=(tab==='ngoai'?w.ngoai:w.hd).length; if(len!==n) errs.push(`ca nam ${nam} ${tab} ${len} != ${n}`); }
  console.log('ca nam',nam,v.kpi, v.kys.map(q=>q.ten+(q.chon?'*':'')).join(','));
}
const u2=[...new Set(errs)]; console.log('tong loi sau kiem ca nam:',u2.length); u2.slice(-10).forEach(e=>console.log(' -',e));
// 9. Chi tiet hoa don: SL x don gia = thanh tien (theo HD); cot ke khai cong lai = bang ke; moi HD bang ke co trong chi tiet
let e9=0, n9=0;
for(const nam of ['2026','2025']) for(const ky of ['q1','q2','q3','q4']) for(const extra of [{},{lan:'0'},{ss:true}]){
  const c=new C({}); c.state=Object.assign({},c.state,{nam,ky,tab:'tk'},extra); const v=c.renderVals(); n9++;
  const ct=v._ctAll;
  ct.forEach(r=>{ const sl=num(r.sl),dg=num(r.dg),tt=num(r.tt); if(Math.abs(sl*dg)!==Math.abs(tt)){e9++; if(e9<6) console.log(' SLxDG sai',nam,ky,r.so,r.hang,r.sl,r.dg,r.tt);} });
  const bk = tab => { const c2=new C({}); c2.state=Object.assign({},c2.state,{nam,ky,tab},extra); return c2.renderVals().hd; };
  const rows=[...bk('ban'),...bk('mua')]; const t=rows.reduce((a,r)=>a+num(r.tien),0), th=rows.reduce((a,r)=>a+num(r.thue),0);
  const kt=ct.reduce((a,r)=>a+r._t,0), kth=ct.reduce((a,r)=>a+r._th,0);
  if(kt!==t||kth!==th){ e9++; console.log(' ke khai chi tiet khac bang ke',nam,ky,JSON.stringify(extra),kt,t,kth,th); }
  const keys=new Set(ct.map(r=>r.key)); if(keys.size!==rows.length){ e9++; console.log(' so HD',keys.size,'!= bang ke',rows.length,nam,ky,JSON.stringify(extra)); }
  // so tren HD = so Kho (khoTien) khi co
  rows.forEach(r=>{ if(!r.khoTien||/USD/.test(r.khoTien)) return; const lines=ct.filter(x=>x.so===r.so); const s1=lines.reduce((a,x)=>a+x._hdT,0); if(s1!==num(r.khoTien)){ e9++; console.log(' tien HD khac Kho',r.so,s1,r.khoTien);} });
}
const cN=new C({}); cN.state=Object.assign({},cN.state,{ky:'nam',tab:'ct'}); const vN=cN.renderVals(); const r0=vN.chiTiet[0]; r0.xem(); const vN2=cN.renderVals();
if(!vN2.coXemHd||!vN2.hdDong.length) {e9++; console.log(' khong mo duoc HD goc');} else console.log(' xem HD:',vN2.hdTenFile,vN2.hdCong,vN2.hdThue,vN2.hdTong,'| kk',vN2.hdKk);
console.log('chi tiet: trang thai',n9,'loi',e9);
