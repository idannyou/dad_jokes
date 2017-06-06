# == Schema Information
#
# Table name: jokes
#
#  id         :integer          not null, primary key
#  joke       :string           not null
#  answer     :string           not null
#  funny      :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Joke < ApplicationRecord

  validates :joke, :answer, presence: true
  validates :funny, inclusion: {in :[true, false]}


end
