export function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-secondary)',
        color: 'var(--color-text-primary)',
        padding: 'var(--spacing-2xl)',
        fontFamily: 'var(--font-family-sans)',
      }}
    >
      <h1
        style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        My Design System
      </h1>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)' }}>
        Storybook에서 컴포넌트를 확인하세요: <code>npm run storybook</code>
      </p>
    </main>
  );
}
