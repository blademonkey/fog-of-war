(async function(){
  const parts = await Promise.all(['fog-v17-small-01.js','1-fog-v17-small-02.js','2-fog-v17-small-03.js','3-fog-v17-small-04.js','4-fog-v17-small-05.js','5-fog-v17-small-06.js','6-fog-v17-small-07.js','7-fog-v17-small-08.js','8-fog-v17-small-09.js','9-fog-v17-small-10.js','10-fog-v17-small-11.js','11-fog-v17-small-12.js','12-fog-v17-small-13.js','13-fog-v17-small-14.js','14-fog-v17-small-15.js','15-fog-v17-small-16.js','16-fog-v17-small-17.js','17-fog-v17-small-18.js','18-fog-v17-small-19.js','19-fog-v17-small-20.js','20-fog-v17-small-21.js','21-fog-v17-small-22.js','22-fog-v17-small-23.js','23-fog-v17-small-24.js','24-fog-v17-small-25.js','25-fog-v17-small-26.js','26-fog-v17-small-27.js','27-fog-v17-small-28.js'].map(async name => {
    const response = await fetch(name, {cache: 'no-store'});
    if (!response.ok) throw new Error('Missing Fog of War asset: ' + name);
    return response.text();
  }));
  const script = document.createElement('script');
  script.src = URL.createObjectURL(new Blob([parts.join('')], {type:'text/javascript'}));
  script.onload = () => URL.revokeObjectURL(script.src);
  script.onerror = () => { document.getElementById('root').textContent = 'The page could not load. Please refresh.'; };
  document.body.appendChild(script);
})().catch(() => { document.getElementById('root').textContent = 'The page could not load. Please refresh.'; });
