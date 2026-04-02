import { test, expect } from "@playwright/test";


test('sinsrire', { tag: "@regression" }, async ({ page }) => {
    await page.goto("https://thrundrz.fr/gestion/");

    //cliquer sur le bouton creation du compte
    await page.getByRole("link", { name: "Création du compte" }).click()
    await expect(page).toHaveURL("https://thrundrz.fr/gestion/newcompte");
    
    //remplir le champs nom
    await page.getByRole("textbox", { name: "Jean Dupont" }).fill("bouzef sam");
    //remplir le champs mail

    let random3 = Math.floor(Math.random() * 200)
    let mail = "bouz" + random3 + "@gmail.com"
     
    await page.getByPlaceholder("contact@societe.com").fill(mail);
    //remplir le champs le champs tel
    await page.getByPlaceholder("+33 6 12 34 56 78").fill("+33623354667");


    let random2 = Math.floor(Math.random() * 200)
    let siret = "1000000000" + random2
     

    //mot de passe 
    await page.getByPlaceholder("********").fill("Bouzef@");
    //numero de siret
    await page.getByPlaceholder("12345678901234").fill(siret);
    //s'inscrire
    await page.getByRole("button", { name: "S'inscrire" }).click();
    //page dashboard
    await expect(page).toHaveURL("https://thrundrz.fr/gestion/EspaceClient");






});





