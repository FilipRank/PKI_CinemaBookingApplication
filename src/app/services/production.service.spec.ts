import { Production, ProductionService } from "./production.service";

describe(`Production Service`, () => {
    let service: ProductionService;
    beforeEach(() => {
        service = new ProductionService();
    });

    it(`getAllProductions() return 10 or more productions`, async () => {
        let productions = await service.getAllProductions();
        expect(productions.length).toBeGreaterThanOrEqual(10);
    });
});