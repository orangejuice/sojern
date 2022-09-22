export const fetchMany = ({url, count}) => {
  const result = []
  for (let i = 0; i < count; i++) {
    fetch(url).then(res => res.json()).then(r => {
      result.push(r.url)
    })
  }
  return result
}

export function fetchArray(...urls) {
  const f = (u) => fetch(u).then((r) => r.json());
  return Promise.all(urls.map(f));
}

export const fetchOne = url => {
  return fetch(url).then(res => res.json()).then(r => r.url)
}

export const getBase64FromUrl = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    }
  });
}

export const stringToBase64 = (string) => Buffer.from(string).toString('base64')

