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

require 'test_helper'

class JokeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
