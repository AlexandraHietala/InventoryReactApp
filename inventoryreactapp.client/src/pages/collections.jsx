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
        ? <p><br /><br /><br /><em>Loading...</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th class="hidden-element">ID</th>
                    <th>Collection</th>
                    <th>Description</th>
                </tr>

            </thead>
            <tbody>
                {collections.map(collection =>
                    <tr key={collection.id}>
                        <td class="hidden-element">{collection.id}</td>
                        <td>{collection.collectionName}</td>
                        <td>{collection.description}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <Layout>
                <h2 id="tableLabel">Collections</h2>
                {contents}
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
