require 'rails_helper'

describe "Viewing the list of notebooks" do
  it "shows the notebooks" do
    notebook1 = Notebook.create(name: "jujitsu")
    notebook2 = Notebook.create(name: "recipes")

    visit notebooks_url

    expect(page).to have_text(notebook1.name)
    expect(page).to have_text(notebook2.name)
  end

end