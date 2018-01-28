require 'open-uri'
require 'nokogiri'
require 'json'

i = 0
json = []
files = ["https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"]
files.each do |file|
  doc = Nokogiri::HTML(open(file))
  doc.css(".markdown-body").children.each do |result|
    puts result.name
    if result.name == "p"
      i += 1
      data = result.inner_html
      data = data.to_str
      json.push(data)
    elsif result.name == "pre"
      i += 1
      data = result.inner_html
      data = data.to_str
      json.push(data)
      puts data
    end
  # end
  end
  jsonFile = File.new("md.json", "w+")
  json = json.to_json
  jsonFile.puts json
end
