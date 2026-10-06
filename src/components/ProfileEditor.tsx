import { useState } from 'react';

interface Profile {
  name: string;
  specialty: string;
  isOnline: boolean;
}

export function ProfileEditor() {
  const [profile, setProfile] = useState<Profile>({
    name: 'Глєб',
    specialty: 'React Developer',
    isOnline: true
  });

  return (
    <div
      style={{
        display: 'flex',
        gap: '32px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Редагувати профіль</h3>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Ім'я:
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Спеціальність:
            </label>
            <input
              type="text"
              value={profile.specialty}
              onChange={(e) => setProfile({ ...profile, specialty: e.target.value })}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <input
              type="checkbox"
              id="isOnline"
              checked={profile.isOnline}
              onChange={(e) => setProfile({ ...profile, isOnline: e.target.checked })}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label htmlFor="isOnline" style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              Онлайн статус
            </label>
          </div>
        </form>
      </div>

      {/* Права колонка: Прев'ю */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justify: 'center',
          alignItems: 'center',
          backgroundColor: '#f9fafb',
          border: '1px solid #f3f4f6',
          borderRadius: '8px',
          padding: '20px',
          position: 'relative'
        }}
      >
        <div style={{ position: 'relative', marginBottom: '12px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '32px',
              fontWeight: 'bold'
            }}
          >
            {profile.name ? profile.name.charAt(0).toUpperCase() : '?'}
          </div>
          {profile.isOnline && (
            <span
              style={{
                position: 'absolute',
                bottom: '4px',
                right: '4px',
                width: '16px',
                height: '16px',
                backgroundColor: '#22c55e',
                border: '2px solid #ffffff',
                borderRadius: '50%'
              }}
              title="Online"
            />
          )}
        </div>

        <h3 style={{ margin: '8px 0 4px 0', color: '#111827' }}>
          {profile.name || 'Введіть ім\'я'}
        </h3>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
          {profile.specialty || 'Введіть спеціальність'}
        </p>
      </div>
    </div>
  );
}
