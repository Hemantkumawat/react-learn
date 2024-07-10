

import { Client, Account, ID } from "appwrite";
import config from "../config/app";
export class AuthService {

    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(config.appWrite.url)
            .setProject(config.appWrite.projectId)
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return userAccount;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return this.account.get();
        } catch (error) {
            throw error;
        }
    }
    async logout() {
        try {
            return this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}
