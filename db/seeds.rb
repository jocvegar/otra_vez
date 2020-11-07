require 'faker'

options = ["camisa", "pantalón", "gorra", "polo"]

ProductCategory.create(
	[
		{category_type: "hombre"},
		{category_type: "mujer"},
		{category_type: "otro"},
	]
)

20.times do
	Product.create(
		title: Faker::Artist.name,
		price: Random.new.rand(50..300),
		category: ProductCategory.all.sample.category_type,
		quantity: rand(1..10),
		option: options.sample,
		size: Product.sizes[(0..5).to_a.sample]
	)
end
