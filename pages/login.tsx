
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    alert(`模擬登入\nEmail: ${email}\nPassword: ${password}`);
  };
  return (
    <div style={{ padding: 50 }}>
      <h2>登入</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>登入</button>
    </div>
  );
}
