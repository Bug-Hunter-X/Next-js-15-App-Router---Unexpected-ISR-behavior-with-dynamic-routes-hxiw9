```javascript
// pages/index.js
export default async function Home() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return (
    <div>
      <h1>Hello World!</h1>
      <p>Data from API: {data.someData}</p>
    </div>
  );
}

// Add revalidate tag to enable ISR
export const metadata = {
  revalidate: 60 // regenerate every 60 seconds
};
```