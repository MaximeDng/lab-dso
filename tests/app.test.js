// Test 1 : Un test de calcul basique (vérifie que ton moteur de test tourne)
test('Calcul de base : 2 + 2 doit faire 4', () => {
  expect(2 + 2).toBe(4);
});

// Test 2 : Simulation d'un test de sécurité (vérifie qu'une variable n'est pas vide)
test('Sécurité : La config ne doit pas être vide', () => {
  const config = { apiKey: "dummy-key" };
  expect(config.apiKey).toBeDefined();
});