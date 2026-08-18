import { useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Input,
  Modal,
  Select,
  Skeleton,
  Spinner,
} from '../../components/ui';

export default function DesignSystemPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: 'var(--space-8)', maxWidth: 'var(--content-max-width)', margin: '0 auto' }}>
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700 }}>AstroLens Design System</h1>
        <p style={{ color: 'var(--color-neutral-500)' }}>Core primitive component states & showcase.</p>
      </header>

      {/* Buttons */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Buttons</h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Form Controls */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Inputs & Selection</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
          <Input id="email" label="Email Address" placeholder="alex@example.com" />
          <Input id="email-error" label="Email with Error" defaultValue="invalid-email" error="Please enter a valid email address" />
          <Input id="disabled-input" label="Disabled Field" disabled defaultValue="Disabled content" />
          <Select
            id="experience"
            label="Experience Level"
            options={[
              { label: 'Beginner', value: 'beginner' },
              { label: 'Intermediate', value: 'intermediate' },
              { label: 'Advanced', value: 'advanced' },
            ]}
          />
        </div>
        <div style={{ marginTop: 'var(--space-4)' }}>
          <Checkbox
            id="terms"
            label="I accept terms and conditions"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </div>
      </section>

      {/* Badges & Feedback */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Badges & Feedback</h2>
        <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="primary">Active</Badge>
          <Badge variant="success">Completed</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Failed</Badge>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Alert variant="info" title="Information">Pattern analytics update dynamically after completing each module.</Alert>
          <Alert variant="success" title="Success">Your assessment submission was saved.</Alert>
          <Alert variant="warning" title="Warning">Complete all unanswered questions before generating report.</Alert>
          <Alert variant="error" title="Error">Unable to reach assessment server. Retrying...</Alert>
        </div>
      </section>

      {/* Skeletons & Spinners */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Spinners & Skeletons</h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', maxWidth: '400px' }}>
          <Skeleton height="20px" width="60%" />
          <Skeleton height="14px" width="100%" />
          <Skeleton height="14px" width="85%" />
        </div>
      </section>

      {/* Cards & Modal */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Cards & Modal</h2>
        <Card
          title="Cognitive Styles Assessment"
          description="Analyzes structured vs intuitive pattern recognition."
          footer={<Button size="sm" onClick={() => setModalOpen(true)}>Open Modal</Button>}
        >
          <p style={{ margin: 0, color: 'var(--color-neutral-700)' }}>
            This card represents individual assessment modules and learning paths.
          </p>
        </Card>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Assessment Confirmation"
        footer={
          <>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setModalOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p style={{ margin: 0 }}>Are you ready to submit your dimension assessment responses?</p>
      </Modal>
    </div>
  );
}