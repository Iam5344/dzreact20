import { ProfileEditor } from './components/ProfileEditor';

export default function App() {
  return (
    <main style={{ padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Мій профіль</h1>
      <ProfileEditor />
    </main>
  );
}
