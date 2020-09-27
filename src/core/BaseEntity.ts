export default abstract class BaseEntity {
	public id!: string; // Add support for ObjectID later
	public createdAt = new Date();
	public updatedAt = new Date();

	private initialized = false;

	getID(): string | null {
		return this.id || null;
	}

	isInitialized(): boolean {
		return this.initialized;
	}
}
