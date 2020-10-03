require 'faker'

# 20.times do
# 	Product.create(
# 		title: Faker::Artist.name,
# 		price: Random.new.rand(50..300)
# 	)
# end

# ProductCategory.create(
# 	[
# 		{category_type: "hombre"},
# 		{category_type: "mujer"},
# 		{category_type: "otro"},
# 	]
# )
# options = ["camisa", "pantalón", "gorra", "polo"]
# Product.all.each do |p|
# 	p.update(category: ProductCategory.all.sample.category_type, quantity: rand(1..10), option: options.sample)
# end

Product.all.each do |product|
	product.update(size: Product.sizes[(0..5).to_a.sample])
end
