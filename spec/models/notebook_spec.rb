require 'rails_helper'

describe "A Notebook" do 
  it "has many lists, many pages, and many pages through lists" do
    notebook = Notebook.new(name: "jujitsu")
    notebook.save

    list1 = notebook.lists.new(name: "Nage")
    list2 = notebook.lists.new(name: "Green Belt Exam")
    page1 = list1.pages.new(name: "Ogoshi", notebook_id: notebook.id)
    page2 = list1.pages.new(name: "Seoi Nage", notebook_id: notebook.id)
    list1.save
    list2.save
    page1.save
    page2.save

    expect(notebook.lists).to include(list1, list2)
    expect(notebook.pages).to include(page1, page2)
    expect(notebook.lists.first.pages).to include(page1, page2)
  end

end