class CardSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :tasks, include_nested_associations: true
end
