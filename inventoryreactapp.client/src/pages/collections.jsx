import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';

const CollectionsPage = () =>
{
    const [collections, setCollections] = useState();

    useEffect(() => {
        populateCollectionData();
    }, []);

    const contents = collections === undefined
        ? <p><em>Loading...</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>

            </thead>
            <tbody>
                {collections.map(collection =>
                    <tr key={collection.id}>
                        <td>{collection.id}</td>
                        <td>{collection.collectionName}</td>
                        <td>{collection.description}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <Layout>
            <div>
                <h1 id="tableLabel">Collections</h1>
                {contents}
            </div>
        </Layout>
    );

    async function populateCollectionData() {
        const response = await fetch('collections');
        if (response.ok) {
            const data = await response.json();
            setCollections(data);
        }
    }
}

export default CollectionsPage;
