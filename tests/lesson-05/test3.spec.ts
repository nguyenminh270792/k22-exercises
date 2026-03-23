/* Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 3: Todo page”.
a. Thêm mới 100 todo item có nội dung “Todo <i>”
b. Xoá các todo có số lẻ */

import { test, expect } from '@playwright/test';

test('add and delete todo items', async ({ page }) => {
    await test.step('Go to Material Playwright page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click on "Bài học 3: Todo page"', async () => {
        await page.locator('//table//a[contains(text(),"Todo page")]').click();
    });

    await test.step('Add 100 todo items', async () => {
        const newTodoInput = await page.locator('//input[@id="new-task"]');
        const addTodoButton = await page.locator('//button[@id="add-task"]');
        for (let i = 1; i <= 100; i++) {
            await newTodoInput.fill(`Todo ${i}`);
            await addTodoButton.click();
        }
    });

    await test.step('Delete odd-numbered todo items', async () => {
        for (let i = 1; i <= 100; i += 2) {
            const deleteButton = await page.locator(`//button[@id="todo-${i}-delete"]`);
            deleteButton.waitFor({ state: 'visible' });
            page.once('dialog', async (dialog) => dialog.accept());
            await deleteButton.click();
        }
    });

    await test.step('Verify remaining todo items', async () => {
        for (let i = 2; i <= 100; i += 2) {
            const todoItem = await page.locator(`//button[@id="todo-${i}-delete"]`);
            await expect(todoItem).toBeVisible();
        }
    });
});