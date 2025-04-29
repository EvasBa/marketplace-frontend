import Layout from '@/components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Construction Marketplace</h1>
          <p className="mt-4 text-xl text-gray-600">Find the best construction materials and services</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeaturedCard
            title="Quality Materials"
            description="Browse our wide selection of construction materials"
          />
          <FeaturedCard
            title="Trusted Vendors"
            description="Connect with verified suppliers"
          />
          <FeaturedCard
            title="Best Prices"
            description="Competitive prices for all your needs"
          />
        </section>
      </div>
    </Layout>
  )
}

function FeaturedCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  )
}