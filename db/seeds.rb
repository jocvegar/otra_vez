require 'faker'

20.times do
	Product.create(
		title: Faker::Artist.name,
		price: Random.new.rand(50..300)
	)
end
