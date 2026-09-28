(async function(){
  const parts = await Promise.all(['fog-v17-01.js','fog-v17-02.js','fog-v17-03.js','fog-v17-04.js','fog-v17-05.js','fog-v17-06.js','fog-v17-07.js'].map(async name => {
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
