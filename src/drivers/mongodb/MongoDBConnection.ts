import {
	Database,
	MongoClient,
	ClientOptions,
} from 'https://deno.land/x/mongo@v0.11.1/mod.ts';

export default class MongoDBConnection {
	protected client!: MongoClient;
	protected db!: Database;
	private config: ClientOptions | string;

	constructor(config: ClientOptions | string) {
		this.config = config;
	}
	async connect(): Promise<void> {
		this.client = new MongoClient();
		if (typeof this.config === 'string') {
			this.client.connectWithUri(this.config);
		} else {
			this.client.connectWithOptions(this.config);
		}
		this.db = this.client.database('dbName'); // Configure rest later
	}
}
