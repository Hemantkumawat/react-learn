import config from "../config/app";
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client.setEndpoint(config.appWrite.url)
            .setProject(config.appWrite.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appWrite.database.id,
                config.appWrite.database.tables.articles,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch (error) {
            console.log('Error:::', error);
        }
    }
    async updatePost(slug, { title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                config.appWrite.database.id,
                config.appWrite.database.tables.articles,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch (error) {
            console.log('Error:::', error);
        }
    }
    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                config.appWrite.database.id,
                config.appWrite.database.tables.articles,
                slug
            )
        }
        catch (error) {
            console.log('Error:::', error);
        }
        return false;
    }
    async getPost(slug) {
        try {
            return await this.databases.deleteDocument(
                config.appWrite.database.id,
                config.appWrite.database.tables.articles,
                slug
            )
        }
        catch (error) {
            console.log('Error:::', error);
        }
        return false;
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                config.appWrite.database.id,
                config.appWrite.database.tables.articles,
                queries
            )
        } catch (error) {
            console.log('Error:::', error);
            return false;
        }
    }
    // File upload Service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appWrite.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Error:::', error);
            return false;
        }
    }
    // File delete Service
    async deleteFile(id) {
        try {
            return await this.bucket.deleteFile(
                config.appWrite.bucketId, id
            )
        } catch (error) {
            console.log('Error::: wihile delete file', error);
            return false;
        }
    }
}

const service = new Service();
export default service;