#Lesson 07 Selector Advanced

## Dom Relation

1. self: node hiện tại
2. parent: node cha phía trên trực tiếp của node hiện tại
3. children: tương tự như parent, children là node con trực tiếp của node hiện tại
4. ancestor: tổ tiên (ví dụ như trong gia phả: cha - ông - cụ...) của node hiên tại
5. descendant: con cái (ví dụ như trong gia phả: con, cháu, chắt, chít...) của node hiên tại
6. sibling: anh em, cùng cha (ví dụ như trong gia đình, là anh chị em ruột, có cùng cha mẹ)
7. following: các node ở dưới, ko tính con của note hiện tại (ví dụ trong gia đình: gia đình mình, và gia đình các cô chú của cha - khi lấy following, bỏ qua gia đình mình, lấy tất cả các thành viên của tất cả gia cô + chú)
8. following-sibling: giống như ví dụ ở trên, cha đang là current note thì kết quả sẽ trả về chú+cô của cha ở bên **dưới** cha trong cây gia phả, ko lấy những đứa cháu
9. preceding-sibling: tương tự ở trên, cha đang là current note thì kết quả sẽ trả về chú+cô của cha ở bên **TRÊN** cha trong cây gia phả, ko lấy những đứa cháu

## XPATH ADVANCE

### Wildcard
 *: tìm tất cả


### Axes
1. child: tương tự children ở trên
2. descentdant, parent... và 1 số case trên tự ở trên
3. ABC-or-self: ABC hoặc chính nó (ABC stands for relation ở trên )

**Syntax** //tag/relationship::tagname[@attribute=’value’]
Trong đó:
- @attribute để truy cập thuộc tính của element.
- Sử dụng "and / or" để kết hợp các điều kiện 

### Select by text method
1. text(): tìm chính xác, cú pháp //*[text() = "abc"]
2. contains: tìm 1 phần, cú pháp: //*[contains(text(), "abc")]
3. normalize-space(): xóa khoảng trắng dư thừa trong quá trình code hoặc generate html, cú pháp: //*[normalize-space(text()) = "abc"]
4. starts-with(): tìm 1 chuỗi bắt đầu với 1 chuỗi nào đó, cú pháp: //*[starts-with(text(), "Hello")]